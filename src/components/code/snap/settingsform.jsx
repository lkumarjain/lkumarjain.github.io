import { Grid2, MenuItem, Paper, TextField, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FontFamily from "../editor/fontfamily";

export function SettingsForm(props) {
    const { record, handleChange, handleAttributeChange } = props;

    return (
        <Paper elevation={6} style={{ padding: "20px", width: "260px" }}>
            <Grid2 container spacing={2}>
                <Grid2 size={12}>
                    <ToggleButtonGroup color="primary" value={record.Scale} exclusive onChange={(event, value) => handleAttributeChange("Scale", value)}>
                        <ToggleButton disabled value={0}>Scale</ToggleButton>
                        <ToggleButton value={1}>1x</ToggleButton>
                        <ToggleButton value={2}>2x</ToggleButton>
                        <ToggleButton value={3}>3x</ToggleButton>
                        <ToggleButton value={4}>4x</ToggleButton>
                        <ToggleButton value={5}>5x</ToggleButton>
                    </ToggleButtonGroup>
                </Grid2>
                <Grid2 size={12}>
                    <ToggleButtonGroup color="primary" value={record.Highlight} exclusive onChange={(event, value) => handleAttributeChange("Highlight", value)}>
                        <ToggleButton disabled value={0}>Line Highlight</ToggleButton>
                        <ToggleButton value={true}>Yes</ToggleButton>
                        <ToggleButton value={false}>No</ToggleButton>
                    </ToggleButtonGroup>
                </Grid2>
                <Grid2 size={12}>
                    <ToggleButtonGroup color="primary" value={record.ShowResult} exclusive onChange={(event, value) => handleAttributeChange("ShowResult", value)}>
                        <ToggleButton disabled value={0}>Show Result</ToggleButton>
                        <ToggleButton value={true}>Yes</ToggleButton>
                        <ToggleButton value={false}>No</ToggleButton>
                    </ToggleButtonGroup>
                </Grid2>
                <Grid2 size={6}>
                    <TextField fullWidth required select size="small" name="FontSize" label="Font Size" variant="outlined" value={record.FontSize} onChange={handleChange}>
                        <MenuItem value="12px">12</MenuItem>
                        <MenuItem value="14px">14</MenuItem>
                        <MenuItem value="16px">16</MenuItem>
                        <MenuItem value="18px">18</MenuItem>
                        <MenuItem value="20px">20</MenuItem>
                        <MenuItem value="22px">22</MenuItem>
                        <MenuItem value="24px">24</MenuItem>
                    </TextField>
                </Grid2>
                <Grid2 size={6}>
                    <TextField fullWidth required select size="small" name="FontWeight" label="Font Weight" variant="outlined" value={record.FontWeight} onChange={handleChange}>
                        <MenuItem value="300">300</MenuItem>
                        <MenuItem value="400">400</MenuItem>
                        <MenuItem value="500">500</MenuItem>
                        <MenuItem value="600">600</MenuItem>
                        <MenuItem value="700">700</MenuItem>
                    </TextField>
                </Grid2>
                <Grid2 size={12}>
                    <TextField fullWidth required select size="small" name="FontFamily"
                        label="Font Family" variant="outlined" style={{ ...FontFamily[record.FontFamily] }}
                        value={record.FontFamily} onChange={handleChange}>
                        {FontFamily.Values.map((c, i) => (
                            <MenuItem key={c} value={c} style={{ ...FontFamily[c] }}>{c}</MenuItem>
                        ))}
                    </TextField>
                </Grid2>
            </Grid2>
        </Paper>
    );
}