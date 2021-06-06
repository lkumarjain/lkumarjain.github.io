import React from 'react';
import { Button, DialogActions, DialogContent, Grid, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Dialog from '../common/dialog';
import { Article, Colors } from '../../components';

import commonService from "../../services/common";
import infograpicService from "../../services/infographic";



const useStyles = makeStyles((theme) => ({
    content: {
        padding: 0,
    },
    stepper: {
        padding: "10px 0px 0px 0px",
    }
}));

export default function InfographicForm(props) {
    const { record, variant, label, icon, onSave, onClose, ...rest } = props;
    const [data, updateData] = React.useState(record ? record : infograpicService.NilArticle("article"));

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (event) => { setOpen(true); };

    const handleClose = (event) => {
        setOpen(false);
        if (onClose) { onClose(event); };
    };

    function handleSubmit(event) {
        event.preventDefault();
        onSave(data);
        if (onClose) { onClose(event); };
    }

    function handleChange(event) {
        let result = commonService.UpdateAttribute(data, event.target);
        updateData(result);
    }

    return <div {...rest}>
        <MenuItem onClick={handleClickOpen}>&#8288;{label}</MenuItem>
        <Dialog onClose={handleClose} open={open} title={label} titlevariant="h5">
            <DialogContent dividers className={classes.content}>
                <ArticalForm record={data} handleChange={handleChange} />
            </DialogContent>
            <DialogActions>
                <Button size="small" variant="contained" onClick={handleClose}>Cancel</Button>
                <Button size="small" variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
            </DialogActions>
        </Dialog>
    </div>;
}

function ArticalForm(props) {
    const { record, handleChange } = props;

    return <Article variant="section" color={record.Color}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
                <TextField fullWidth required select size="small"
                    name="Type" label="Type" variant="outlined"
                    value={record.Type} onChange={handleChange}>

                    {infograpicService.Types.map((e, i) => (
                        <MenuItem key={e} value={e}>{e}</MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <TextField fullWidth required select size="small"
                    name="GridTemplate" label="GridTemplate" variant="outlined"
                    defaultValue={record.GridTemplate} onChange={handleChange}>

                    {commonService.GridTemplates.map((e, i) => (
                        <MenuItem key={e.Key} value={e.Value}>{e.Label}</MenuItem>
                    ))}
                </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <TextField fullWidth required select size="small"
                    name="Color" label="Color" variant="outlined"
                    value={record.Color} onChange={handleChange}>

                    {Colors.Values.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}

                </TextField>
            </Grid>

            <Grid item xs={12} sm={12} md={6}>
                <TextField fullWidth required select size="small"
                    name="Pattern" label="Pattern" variant="outlined"
                    defaultValue={record.Pattern ? record.Pattern : ""} onChange={handleChange}>

                    <MenuItem value="">None</MenuItem>
                    {infograpicService.Patterns.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}

                </TextField>
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth size="small" name="Title" label="Title"
                    variant="outlined" defaultValue={record.Title ? record.Title : ""}
                    onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth size="small" name="Subtitle" label="Subtitle"
                    variant="outlined" defaultValue={record.Subtitle ? record.Subtitle : ""}
                    onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth size="small" name="Image" label="Image"
                    variant="outlined" defaultValue={record.Image ? record.Image : ""}
                    onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth size="small" name="Footer" label="Footer"
                    variant="outlined" defaultValue={record.Footer ? record.Footer : ""}
                    onChange={handleChange} />
            </Grid>

            <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} size="small" name="Content" label="Content"
                    variant="outlined" defaultValue={record.Content ? record.Content : ""}
                    onChange={handleChange} />
            </Grid>
        </Grid>
    </Article>
}
