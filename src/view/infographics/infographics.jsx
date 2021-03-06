import React from "react";
import { Image, Paper, Timeline, TimelineItem } from "../../components";
import { IconButton, MenuList, Popover } from "@material-ui/core";
import { SettingsSharp } from "@material-ui/icons";
import InfographicsForm from './infographicsForm';

import CommonService from "../../services/common";
import Persistance from "../../services/persistance";
import infographicsService from "../../services/infographics";
import InfographicsFooter from "./infographicsFooter";

const sourceKey = "InfographicsSource";
const recordKey = "InfographicsRecord";
const vPaper = "paper";
const vArticle = "article";
const vSection = "section";

export default function Infographics(props) {
    const { path, hasAction = false, config } = props;

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

    function handleSaveInfographics(value, parent) {
        value = infographicsService.AddOrReplace(record, value, parent)
        Persistance.Write(recordKey, CommonService.Stringify(value));
        setRecord({ ...value });
    }

    return <Paper color={record.Color} style={record.Style}
        title={record.Title} subtitle={record.Subtitle}
        avatar={record.Avatar ? <Image src={record.Avatar} alt={record.Title} /> : record.Title && record.Title.substring(0, 1)}
        action={hasAction ? <Action variant={vPaper} record={record} onSave={handleSaveInfographics} /> : undefined}
        footer={<InfographicsFooter config={config} content={record.Footer} />}>

        {record.Articles && record.Articles.map((article, i) => (
            <Timeline key={article.Key} layout={article.Layout}
                color={article.Color} style={article.Style}
                title={article.Title} subtitle={article.Subtitle}
                avatar={article.Avatar ? <Image src={article.Avatar} alt={article.Title} /> : article.Title && article.Title.substring(0, 1)}
                action={hasAction ? <Action parent={record.Key} variant={vArticle} record={article} onSave={handleSaveInfographics} /> : undefined}
                footer={article.Footer}>

                {article.Sections && article.Sections.map((section, i) => (
                    <TimelineItem key={section.Key} color={section.Color}
                        style={{ '--height': article.SectionHeight, ...section.Style }}
                        title={section.Title} subtitle={section.Subtitle}
                        avatar={section.Avatar ? <Image src={section.Avatar} alt={section.Title} /> : section.Title && section.Title.substring(0, 1)}
                        action={hasAction ? <Action parent={article.Key} variant={vSection} record={section} onSave={handleSaveInfographics} /> : undefined}>

                        {section.Content}

                    </TimelineItem>
                ))}
            </Timeline>
        ))}
    </Paper >;
}

function Action(props) {
    const { parent, record, variant, onSave } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const open = Boolean(anchorEl);

    return <React.Fragment>
        <IconButton color="inherit" onClick={handleClick}><SettingsSharp /></IconButton>
        <Popover open={open} anchorEl={anchorEl} onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
            transformOrigin={{ vertical: 'top', horizontal: 'center', }}>

            <Paper color={record.Color} variant="panel">
                <MenuList>
                    {variant === vPaper && <InfographicsForm parent={record.Key} variant={vArticle} onSave={onSave} onClose={handleClose} label="Create Article" />}
                    {variant === vArticle && <InfographicsForm parent={record.Key} variant={vSection} onSave={onSave} onClose={handleClose} label="Create Section" />}
                    <InfographicsForm parent={parent} variant={variant} record={record} onSave={onSave} onClose={handleClose} label={"Edit ".concat(record.Title)} />
                </MenuList>
            </Paper>
        </Popover>
    </React.Fragment>;
}