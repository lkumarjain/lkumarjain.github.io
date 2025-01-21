import React from 'react';
import { Box, Button, Grid2, MenuItem, Paper, Slider, Stack, TextField, Typography } from '@mui/material';
import { Camera, FormatColorFill, Settings } from '@mui/icons-material';
import { Editor } from '../editor';
import CommonService from '../../../services/common';
import Themes from '../editor/theme';
import { ActionPopover } from '../../popover';
import { Picker } from '../../colors/picker';
import { SettingsForm } from './settingsform';
import FontFamily from '../editor/font';

export function Snap(props) {
    const reference = React.useRef(null);
    const [record, setRecord] = React.useState(
        {
            Width: 50, FontSize: "20px", FontWeight: 500, FontFamily: FontFamily.Default,
            Scale: 4, ThemeName: Themes.Default, Language: "go",
            Background: Themes[Themes.Default].background
        });

    const { fileName = "Program" } = props;

    const onExport = () => {
        setTimeout(() => {
            CommonService.GenerateSnapshot(reference.current, record.Scale)
                .then(blobUrl => { CommonService.Download(blobUrl, "Program.png"); })
                .catch(error => { console.log("Error: " + error); });
        }, 100);
    }

    function handleChange(event) {
        let result = CommonService.UpdateAttribute(record, event.target);
        setRecord(result);
    }

    function handleSliderChange(event, newValue) {
        setRecord({ ...record, Width: newValue });
    }

    return (
        <>
            <Paper elevation={6} style={{ padding: "20px", margin: "10px auto", width: "80%" }}>
                <Grid2 container spacing={2}>
                    <Grid2 item size={8}>
                        <Options record={record} setRecord={setRecord} handleChange={handleChange} />
                    </Grid2>
                    <Grid2 item size={4}>
                        <Right onExport={onExport} />
                    </Grid2>
                    <Grid2 item size={12}>

                    </Grid2>
                </Grid2>
            </Paper>

            <Box>
                <Typography>Window Width</Typography>
                <Slider value={record.Width} valueLabelDisplay="on" color="primary" min={30} max={100}
                    size="medium" onChange={handleSliderChange} />
            </Box>
            <Paper elevation={0} square style={{ margin: "0px auto", width: record.Width + "%" }}>
                <Paper ref={reference} elevation={0} square style={{ padding: "10px", background: record.Background }}>
                    <Editor fileName={fileName} fontSize={record.FontSize} fontWeight={record.FontWeight} fontFamily={record.FontFamily}
                        themeName={record.ThemeName} language={record.Language} />
                </Paper>
            </Paper>
        </>
    );
}

function Options(props) {
    const { record, handleChange } = props;
    return (
        <Grid2 container spacing={2}>
            <Grid2 item size={4}>
                <TextField fullWidth required select size="small" name="ThemeName" label="Theme" variant="outlined"
                    value={record.ThemeName} onChange={handleChange}>
                    {Themes.Values.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </TextField>
            </Grid2>
            <Grid2 item size={4}>
                <TextField fullWidth required select size="small" name="Language" label="Language" variant="outlined"
                    value={record.Language} onChange={handleChange}>
                    <MenuItem value="go">Golang</MenuItem>
                </TextField>
            </Grid2>
            <Grid2 item size={2}>
                <Stack direction="row" spacing={0.5}>
                    <ActionPopover name="color-picker" icon={<FormatColorFill />} background={record.Background}>
                        <Picker name="Background" value={record.Background} handleChange={handleChange} />
                    </ActionPopover>
                    <ActionPopover name="Settings" icon={<Settings />} background={record.Background}>
                        <SettingsForm record={record} handleChange={handleChange} />
                    </ActionPopover>
                </Stack>
            </Grid2>
        </Grid2>
    );
}


function Right(props) {
    const { onExport } = props;
    return (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end", alignItems: "center", }}>
            <Button variant="contained" color="primary" onClick={onExport} startIcon={<Camera />}>
                Export PNG
            </Button>
        </Stack>
    );
}