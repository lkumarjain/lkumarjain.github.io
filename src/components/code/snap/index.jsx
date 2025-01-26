import React from 'react';
import { Avatar, Grid2, MenuItem, Paper, Stack, TextField } from '@mui/material';
import { blue } from '@mui/material/colors';
import { Camera, FormatColorFill, Settings } from '@mui/icons-material';
import { Editor } from '../editor';
import CommonService from '../../../services/common';
import Themes from '../editor/theme';
import { ActionPopover } from '../../popover';
import { Picker } from '../../colors/picker';
import { SettingsForm } from './settingsform';
import FontFamily from '../editor/fontfamily';
import Languages from '../editor/languages';
import { Resizable } from '../../resize';

export function Snap(props) {
    const { fileName = "Program" } = props;

    const reference = React.useRef(null);
    const [record, setRecord] = React.useState(
        {
            Width: 70, FontSize: "20px", FontWeight: 500, FontFamily: FontFamily.Default,
            Scale: 4, ThemeName: Themes.Default, Language: Languages.Default, FileName: fileName,
            Background: Themes[Themes.Default].background, Highlight: false, ShowResult: true,
        });


    const onExport = () => {
        setTimeout(() => {
            CommonService.GenerateSnapshot(reference.current, record.Scale)
                .then(blobUrl => { CommonService.Download(blobUrl, [record.FileName, "png"].join('.')); })
                .catch(error => { console.log("Error: " + error); });
        }, 100);
    }

    function handleChange(event) {
        let result = CommonService.UpdateAttribute(record, event.target);
        setRecord(result);
    }

    function handleAttributeChange(name, value) {
        setRecord({ ...record, [name]: value });
    }

    return (
        <>
            <Paper elevation={6} style={{ padding: "20px", margin: "10px auto", width: "80%", background: "transparent" }}>
                <Grid2 container spacing={2}>
                    <Grid2 item size={8}>
                        <Options record={record} handleChange={handleChange} />
                    </Grid2>
                    <Grid2 item size={4}>
                        <ActionBar record={record} handleChange={handleChange} onExport={onExport} handleAttributeChange={handleAttributeChange} />
                    </Grid2>
                </Grid2>
            </Paper>

            <Resizable>
                <Paper ref={reference} elevation={0} style={{
                    padding: "10px", background: record.Background,
                    boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
                }}>
                    <Editor fileName={record.FileName} fontSize={record.FontSize} fontWeight={record.FontWeight} fontFamily={record.FontFamily}
                        themeName={record.ThemeName} language={record.Language} highlight={record.Highlight} showResult={record.ShowResult} />
                </Paper>
            </Resizable>
        </>
    );
}

function Options(props) {
    const { record, handleChange } = props;
    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={3}>
                <TextField fullWidth required select size="small" name="ThemeName" label="Theme" variant="outlined"
                    value={record.ThemeName} onChange={handleChange}>
                    {Themes.Values.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </TextField>
            </Grid2>
            <Grid2 item size={3}>
                <TextField fullWidth required select size="small" name="Language" label="Language" variant="outlined"
                    value={record.Language} onChange={handleChange}>
                    {Languages.Values.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </TextField>
            </Grid2>
            <Grid2 item size={4}>
                <TextField fullWidth required size="small" name="FileName"
                    label="File Name" variant="outlined" value={record.FileName} onChange={handleChange} />
            </Grid2>
            <Grid2 item size={2}>
                <Stack direction="row" spacing={0.5}>
                    <ActionPopover name="color-picker" icon={<FormatColorFill />} background={record.Background}>
                        <Picker name="Background" value={record.Background} handleChange={handleChange} />
                    </ActionPopover>
                </Stack>
            </Grid2>
        </Grid2>
    );
}


function ActionBar(props) {
    const { record, handleChange, onExport, handleAttributeChange } = props;
    return (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end", alignItems: "center", }}>
            <ActionPopover name="Settings" icon={<Settings />} background={blue[800]}>
                <SettingsForm record={record} handleChange={handleChange} handleAttributeChange={handleAttributeChange} />
            </ActionPopover>
            <Avatar variant="rounded" style={{ cursor: "pointer", background: blue[800] }} onClick={onExport}>
                <Camera />
            </Avatar>
        </Stack>
    );
}