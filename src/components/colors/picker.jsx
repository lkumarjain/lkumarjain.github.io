import React from 'react';
import { Box, FormControlLabel, Paper, Slider, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import colors from '.';
import "./picker.css";

export function Picker(props) {
    const { record, setRecord, handleChange } = props;

    const [options, setOptions] = React.useState({ ColorType: 'SOLID' });


    function handleTabChange(event, newValue) {
        alert(newValue);
        setOptions({ ...options, ColorType: newValue });
    }

    function onSelect(color) {
        setRecord({ ...record, Background: color });
    }


    return (
        <Paper elevation={6} style={{ padding: "20px", width: "200px" }}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs value={options.ColorType} onChange={handleTabChange}>
                    <Tab label="Solid" value="SOLID" />
                    <Tab label="Gradient" value="GRADIENT" />
                </Tabs>
            </Box>
            <Stack spacing={2} style={{ paddingTop: "20px" }}>
                <TextField fullWidth required size="small" name="Background" label="Background" variant="outlined"
                    value={record.Background} onChange={handleChange} />
                {options.ColorType === 'SOLID' && <Solid color="#808080" onSelect={onSelect} />}
            </Stack>
        </Paper>
    )
}

function Solid(props) {
    const { onSelect } = props;
    const [scale, setScale] = React.useState(700);

    const marks = [
        { value: 5, }, { value: 10, }, { value: 20, }, { value: 30, },
        { value: 40, }, { value: 50, }, { value: 60, }, { value: 70, },
        { value: 80, }, { value: 90, }, { value: 100, },
    ];

    const scaleKey = ["--C", scale].join('')

    return (
        <Stack spacing={2} direction="row" useFlexGap sx={{ flexWrap: 'wrap', paddingTop: "10px" }}>
            <Typography variant="subtitle1">Scale</Typography>
            <Slider step={null} valueLabelDisplay="auto" marks={marks} />
            {colors.Values.map((color, i) => (
                <Paper elevation={1} onClick={(event) => onSelect(colors[color][scaleKey], false)}
                    className='jn-color-circle' sx={{ background: colors[color][scaleKey], }} />
            ))}

        </Stack >
    );
}
