import React from 'react';
import { Box, Button, Grid2, MenuItem, Paper, Slider, Stack, TextField, Typography } from '@mui/material';
import { Camera, FormatColorFill, Settings } from '@mui/icons-material';
import { SketchPicker } from 'react-color'
import { Editor } from '../editor';
import CommonService from '../../../services/common';
import Themes from '../editor/theme';
import { ActionPopover } from '../../popover';
import { Picker } from '../../colors/picker';

export function Snap(props) {
    const reference = React.useRef(null);
    const [record, setRecord] = React.useState(
        {
            Width: 50, FontSize: "20px", Scale: 4, ThemeName: "githubLight", Language: "go",
            Background: "#808080"
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

            {/* <Grid2 container spacing={2}>
                <Grid2 item size={2}>
                    <TextField fullWidth required select size="small" name="FontSize" label="Font Size" variant="outlined"
                        value={record.FontSize} onChange={handleChange}>
                        <MenuItem value="12px">12</MenuItem>
                        <MenuItem value="14px">14</MenuItem>
                        <MenuItem value="16px">16</MenuItem>
                        <MenuItem value="18px">18</MenuItem>
                        <MenuItem value="20px">20</MenuItem>
                        <MenuItem value="22px">22</MenuItem>
                        <MenuItem value="24px">24</MenuItem>
                    </TextField>
                </Grid2>
                <Grid2 item size={2}>
                    <TextField fullWidth required select size="small" name="Scale" label="Scale" variant="outlined"
                        value={record.Scale} onChange={handleChange}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                    </TextField>
                </Grid2>
            </Grid2> */}

            <Box>
                <Typography>Window Width</Typography>
                <Slider value={record.Width} valueLabelDisplay="on" color="primary" min={30} max={100}
                    size="medium" onChange={handleSliderChange} />
            </Box>
            <Paper elevation={0} square style={{ margin: "0px auto", width: record.Width + "%" }}>
                <Paper ref={reference} elevation={0} square style={{ padding: "10px", backgroundColor: record.Background }}>
                    <Editor fileName={fileName} fontSize={record.FontSize} themeName={record.ThemeName}
                        language={record.Language} />
                </Paper>
            </Paper>
        </>
    );
}

function Options(props) {
    const { record, setRecord, handleChange } = props;
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
                        <Picker record={record} setRecord={setRecord} handleChange={handleChange} />
                    </ActionPopover>
                    <ActionPopover name="Settings" icon={<Settings />} background={record.Background}>

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