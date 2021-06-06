import React from "react";
import { Grid, IconButton, MenuList, Popover } from "@material-ui/core";
import { SettingsSharp } from "@material-ui/icons";
import { Article, Header, Footer } from "../../components";

import persistance from "../../services/persistance";
import commonService from "../../services/common";
import infographicService from "../../services/infographic";

import InfographicForm from "./infographicForm";

const sourceKey = "InfographicSource";
const recordKey = "InfographicRecord"


export default function Infographic(props) {
    const { path, hasAction } = props;

    const [record, setRecord] = React.useState(persistance.Read(recordKey, {}));
    const source = persistance.Read(sourceKey, "");
    if (source !== path) {
        console.log("Reading from path :: ", path)
        fetch(path)
            .then(response => response.json())
            .then(result => {
                persistance.Write(sourceKey, path);
                persistance.Write(recordKey, commonService.Stringify(result));
                setRecord(result);
            });

        return ""
    }

    function handleSaveInfographic(value) {
        value = infographicService.AddOrReplace(record, value)
        persistance.Write(recordKey, commonService.Stringify(value));
        setRecord(value);
    }

    return <InfographicArticle hasAction={hasAction} variant="section" record={record} onSave={handleSaveInfographic} >

        {record.Articles &&
            <Grid container spacing={3}>
                {record.Articles.map((result, i) => (
                    <Grid key={result.Key} item xs={result.GridTemplate[2]} sm={result.GridTemplate[1]} md={result.GridTemplate[0]}>
                        {result.Type === "standalone" &&
                            <Header variant="standalone" pattern={result.Pattern} title={result.Title}
                                subtitle={result.Subtitle} avatar={result.Image} color={result.Color}
                                action={hasAction ? <InfographicAction variant="standalone" record={result} onSave={handleSaveInfographic} /> : undefined} />
                        }

                        {result.Type !== "standalone" &&
                            <InfographicArticle hasAction={hasAction} variant="article"
                                record={result} onSave={handleSaveInfographic} style={record.ArticleStyle}>
                                {result.Content}
                            </InfographicArticle>
                        }
                    </Grid>
                ))}
            </Grid>
        }

    </InfographicArticle>;
}


function InfographicArticle(props) {
    const { children, hasAction, record, variant, style = {}, onSave } = props;

    return <Article variant={variant} color={record.Color} style={style}
        header={
            <Header variant={variant} pattern={record.Pattern} title={record.Title}
                subtitle={record.Subtitle} avatar={record.Image}
                action={hasAction ? <InfographicAction variant={variant}
                    record={record} onSave={onSave} /> : undefined} />
        }
        footer={record.Footer ? <Footer variant={variant} >{record.Footer}</Footer> : undefined}>
        {children}


    </Article>
}

function InfographicAction(props) {
    const { record, variant, onSave } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => { setAnchorEl(event.currentTarget); };
    const handleClose = () => { setAnchorEl(null); };
    const open = Boolean(anchorEl);

    return <React.Fragment>
        <IconButton color="inherit" onClick={handleClick}><SettingsSharp /></IconButton>
        <Popover open={open} anchorEl={anchorEl} onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }}
            transformOrigin={{ vertical: 'top', horizontal: 'center', }}>

            <Article variant="section" color={record.Color}>
                <MenuList>
                    {variant === "section" &&
                        <InfographicForm onSave={onSave}
                            onClose={handleClose} label="Create Article" />
                    }

                    <InfographicForm record={record} onSave={onSave}
                        onClose={handleClose} label={"Edit ".concat(record.Title)} />
                </MenuList>
            </Article>

        </Popover>
    </React.Fragment>;
}