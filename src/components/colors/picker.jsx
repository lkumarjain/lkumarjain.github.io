import React from 'react';
import { Box, Paper, Stack, Tab, Tabs, TextField } from '@mui/material';
import colors from '.';
import "./picker.css";

export function Picker(props) {
    const { name = "Background", value = "", colorType = value.startsWith("#") ? 'SOLID' : 'GRADIENT', handleChange } = props;

    const [record, setRecord] = React.useState({ ColorType: colorType });


    function handleTabChange(event, newValue) {
        setRecord({ ...record, ColorType: newValue });
    }

    function onSelect(color) {
        handleChange({ target: { name: name, value: color } });
    }

    return (
        <Paper elevation={6} style={{ padding: "20px", width: "260px" }}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs variant="fullWidth" value={record.ColorType} onChange={handleTabChange}>
                    <Tab label="Solid" value="SOLID" />
                    <Tab label="Gradient" value="GRADIENT" />
                </Tabs>
            </Box>
            <Stack spacing={1} style={{ paddingTop: "20px" }}>
                <TextField fullWidth required size="small" name="Background" label="Background" variant="outlined" value={value} onChange={handleChange} />
                {record.ColorType === 'SOLID' && <Solid value={value} onSelect={onSelect} />}
                {record.ColorType === 'GRADIENT' && <Gradient value={value} onSelect={onSelect} />}
            </Stack>
        </Paper>
    )
}

function Solid(props) {
    const { value, onSelect } = props;

    return (
        <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: 'wrap', paddingTop: "10px" }}>
            {colors.Solid.map((color, i) => (
                <Paper key={color} elevation={1} onClick={(event) => onSelect(color)}
                    className='jn-color-box' sx={{ background: color }}>
                    {value === color &&
                        <Box className='jn-color-box-selected' />
                    }
                </Paper>
            ))}
        </Stack >
    );
}

function Gradient(props) {
    const { value, onSelect } = props;

    return (
        <Stack spacing={1} direction="row" useFlexGap sx={{ flexWrap: 'wrap', paddingTop: "10px" }}>
            {colors.Gradient.map((color, i) => (
                <Paper key={color} elevation={1} onClick={(event) => onSelect(color)}
                    className='jn-color-box' sx={{ background: color }}>
                    {value === color &&
                        <Box className='jn-color-box-selected' />
                    }
                </Paper>
            ))}
        </Stack >
    );
}
