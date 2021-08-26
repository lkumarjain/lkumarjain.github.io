import React from 'react';
import { Button, DialogActions, Grid, MenuItem, TextField } from '@material-ui/core';
import Dialog from '../common/dialog';
import { Colors } from '../../components';

import commonService from "../../services/common";
import infograpicService from "../../services/infographics";

const layouts = ['layout-4321', 'layout-3321', 'layout-3221', 'layout-2221', 'layout-2211', 'layout-2111', 'layout-1111'];
const vArticle = "article";
const vSection = "section";

export default function InfographicForm(props) {
    const { parent, record, variant, label, icon, onSave, onClose, ...rest } = props;
    const [data, updateData] = React.useState(record ? record : infograpicService.NilRecord(variant));

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = (event) => { setOpen(true); };

    const handleClose = (event) => {
        setOpen(false);
        if (onClose) { onClose(event); };
    };

    function handleSubmit(event) {
        event.preventDefault();
        onSave(data, parent);
        if (onClose) { onClose(event); };
    }

    function handleChange(event) {
        let result = commonService.UpdateAttribute(data, event.target);
        updateData(result);
    }

    return <div {...rest}>
        <MenuItem onClick={handleClickOpen}>&#8288;{label}</MenuItem>
        <Dialog onClose={handleClose} open={open}
            footer={
                <DialogActions>
                    <Button size="small" variant="contained" onClick={handleClose}>Cancel</Button>
                    <Button size="small" variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
                </DialogActions>
            }
            title={label} color={data.Color}>

            <ArticalForm variant={variant} record={data} handleChange={handleChange} />
        </Dialog>
    </div>;
}

function ArticalForm(props) {
    const { variant, record, handleChange } = props;

    return <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={variant === vArticle ? 4 : 12}>
            <TextField fullWidth required select size="small" name="Color" label="Color"
                variant="outlined" value={record.Color} onChange={handleChange}>

                {Colors.Values.map((c, i) => (
                    <MenuItem key={c} value={c}>{c}</MenuItem>
                ))}

            </TextField>
        </Grid>

        {variant === vArticle &&
            <Grid item xs={12} sm={12} md={4}>
                <TextField fullWidth required select size="small" name="Layout" label="Layout"
                    variant="outlined" value={record.Layout} onChange={handleChange}>

                    {layouts.map((c, i) => (
                        <MenuItem key={c} value={c}>{c}</MenuItem>
                    ))}
                </TextField>
            </Grid>
        }

        {variant === vArticle &&
            <Grid item xs={12} sm={12} md={4}>
                <TextField fullWidth size="small" name="SectionHeight" label="SectionHeight"
                    variant="outlined" defaultValue={record.SectionHeight ? record.SectionHeight : ""}
                    onChange={handleChange} />
            </Grid>
        }

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
            <TextField fullWidth size="small" name="Avatar" label="Avatar"
                variant="outlined" defaultValue={record.Avatar ? record.Avatar : ""}
                onChange={handleChange} />
        </Grid>

        {variant === vSection &&
            <Grid item xs={12}>
                <TextField fullWidth multiline rows={4} size="small" name="Content" label="Content"
                    variant="outlined" defaultValue={record.Content ? record.Content : ""}
                    onChange={handleChange} />
            </Grid>
        }

        <Grid item xs={12}>
            <TextField fullWidth size="small" name="Footer" label="Footer"
                variant="outlined" defaultValue={record.Footer ? record.Footer : ""}
                onChange={handleChange} />
        </Grid>
    </Grid>;
}
