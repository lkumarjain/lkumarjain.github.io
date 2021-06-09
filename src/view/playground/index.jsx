import React from "react";
import { Colors, Image, Paper, Timeline, TimelineItem } from "../../components";

import CommonService from "../../services/common";
import Persistance from "../../services/persistance";
import infographicService from "../../services/infographic";

import './playground.css'
import { IconButton } from "@material-ui/core";
import { SettingsSharp } from "@material-ui/icons";

const sourceKey = "InfographicSource1";
const recordKey = "InfographicRecord1"

export default function Playground(props) {
    const { path = "/data/infographics/kafka.json", hasAction = true } = props;

    const [record, setRecord] = React.useState(Persistance.Read(recordKey, {}));
    const source = Persistance.Read(sourceKey, "");
    if (source !== path) {
        console.log("Reading from path :: ", path)
        fetch(path)
            .then(response => response.json())
            .then(article => {
                Persistance.Write(sourceKey, path);
                Persistance.Write(recordKey, CommonService.Stringify(article));
                setRecord(article);
            });

        return ""
    }

    function handleSaveInfographic(value) {
        value = infographicService.AddOrReplace(record, value)
        Persistance.Write(recordKey, CommonService.Stringify(value));
        setRecord(value);
    }

    return <Paper color={record.Color} style={record.Style}
        title={record.Title} subtitle={record.Subtitle}
        avatar={record.Avatar ? <Image src={record.Avatar} alt={record.Title} /> : record.Title && record.Title.substring(0, 1)}
        action={hasAction ? <Action variant="paper" record={record} onSave={handleSaveInfographic} /> : undefined}
        footer={record.Footer}>

        {record.Articles && record.Articles.map((article, i) => (
            <Timeline key={article.Key} color={article.Color} style={article.Style}
                title={article.Title} subtitle={article.Subtitle}
                avatar={article.Avatar ? <Image src={article.Avatar} alt={article.Title} /> : article.Title && article.Title.substring(0, 1)}
                action={hasAction ? <Action variant="article" record={article} onSave={handleSaveInfographic} /> : undefined}
                footer={article.Footer}>

                {article.Sections && article.Sections.map((section, i) => (
                    <TimelineItem key={section.Key} color={section.Color} style={article.Style}
                        title={section.Title} subtitle={section.Subtitle}
                        avatar={section.Avatar ? <Image src={section.Avatar} alt={section.Title} /> : section.Title && section.Title.substring(0, 1)}
                        action={hasAction ? <Action variant="section" record={section} onSave={handleSaveInfographic} /> : undefined}>

                        {section.Content}

                    </TimelineItem>
                ))}
            </Timeline>
        ))}
    </Paper >;
}

function Action(props) {
    const { record, variant, onSave } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const open = Boolean(anchorEl);

    return <React.Fragment>
        <IconButton color="inherit" onClick={handleClick}><SettingsSharp /></IconButton>
    </React.Fragment>;
}
