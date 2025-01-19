import React from 'react';
import { Box, Button, Paper, Stack, Tab, Tabs, TextField } from '@mui/material';
import { CirclePicker } from 'react-color'
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
        <Paper elevation={6} style={{ padding: "20px", width: "250px" }}>
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
    const { selected, onSelect } = props;
    return (
        <Stack spacing={2} direction="row" useFlexGap
            sx={{ flexWrap: 'wrap', paddingTop: "20px" }}>
            {colors.Values.map((color, i) => (
                <Paper elevation={1} onClick={(event) => onSelect(colors[color]["--C700"], false)}
                    sx={{
                        width: "25px", height: "25px", borderRadius: "50%",
                        background: colors[color]["--C700"],
                    }} />
            ))}
        </Stack>
    );
}
