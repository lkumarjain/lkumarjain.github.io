import React from 'react';
import { Box, Button, Grid, MenuItem, Paper, Slider, TextField, Typography } from '@material-ui/core';
import { Camera } from '@material-ui/icons';
import { Editor } from '../editor';
import CommonService from '../../../services/common';
import Themes from '../editor/theme';

export function Snap(props) {
    const reference = React.useRef(null);
    const [record, setRecord] = React.useState({ Width: 50, FontSize: "20px", Scale: 4, ThemeName: "githubLight" });
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
        console.log(result);
        setRecord(result);
    }

    function handleSliderChange(event, newValue) {
        setRecord({ ...record, Width: newValue });
    }

    return (
        <>
            <Paper elevation={6} style={{ padding: "20px", margin: "10px auto", width: "80%" }}>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                        <TextField fullWidth required select size="small" name="ThemeName" label="Theme" variant="outlined"
                            value={record.Theme} onChange={handleChange}>
                            {Themes.Values.map((c, i) => (
                                <MenuItem key={c} value={c}>{c}</MenuItem>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth size="small" name="Language" label="Language" variant="outlined" />
                    </Grid>
                    <Grid item xs={2}>
                        <Box>
                            <Typography>Width</Typography>
                            <Slider value={record.Width} valueLabelDisplay="on" color="primary" min={30} max={100}
                                size="medium" onChange={handleSliderChange} />
                        </Box>
                    </Grid>
                    <Grid item xs={2}>
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
                    </Grid>
                    <Grid item xs={2}>
                        <TextField fullWidth required select size="small" name="Scale" label="Scale" variant="outlined"
                            value={record.Scale} onChange={handleChange}>
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" color="primary" onClick={onExport} startIcon={<Camera />}>
                            Export PNG
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Paper elevation={0} square style={{ margin: "10px auto", width: record.Width + "%" }}>
                <Paper ref={reference} elevation={0} square style={{ padding: "10px", backgroundColor: "#808080" }}>
                    <Editor fileName={fileName} fontSize={record.FontSize} themeName={record.ThemeName} />
                </Paper>
            </Paper>
        </>
    );
}