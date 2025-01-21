import { MenuItem, Paper, Stack, TextField, Typography } from "@mui/material";
import FontFamily from "../editor/font";

export function SettingsForm(props) {
    const { record, handleChange } = props;

    return (
        <Paper elevation={6} style={{ padding: "20px", width: "260px" }}>
            <Stack spacing={2} style={{ paddingTop: "20px" }}>
                <Typography variant="subtitle2" style={{ borderBottom: "1px solid #D3D3D3" }}>Image Scale</Typography>
                <TextField fullWidth required select size="small" name="Scale" label="Scale" variant="outlined" value={record.Scale} onChange={handleChange}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                </TextField>

                <Typography variant="subtitle2" style={{ borderBottom: "1px solid #D3D3D3" }}>Font</Typography>
                <TextField fullWidth required select size="small" name="FontSize" label="Font Size" variant="outlined" value={record.FontSize} onChange={handleChange}>
                    <MenuItem value="12px">12</MenuItem>
                    <MenuItem value="14px">14</MenuItem>
                    <MenuItem value="16px">16</MenuItem>
                    <MenuItem value="18px">18</MenuItem>
                    <MenuItem value="20px">20</MenuItem>
                    <MenuItem value="22px">22</MenuItem>
                    <MenuItem value="24px">24</MenuItem>
                </TextField>

                <TextField fullWidth required select size="small" name="FontWeight" label="Font Weight" variant="outlined" value={record.FontWeight} onChange={handleChange}>
                    <MenuItem value="300">300</MenuItem>
                    <MenuItem value="400">400</MenuItem>
                    <MenuItem value="500">500</MenuItem>
                    <MenuItem value="600">600</MenuItem>
                    <MenuItem value="700">700</MenuItem>
                </TextField>

                <TextField fullWidth required select size="small" name="FontFamily" label="Font Family" variant="outlined" value={record.FontFamily} onChange={handleChange}>
                    {FontFamily.Values.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </TextField>
            </Stack>
        </Paper>
    );
}