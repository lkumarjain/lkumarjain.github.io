import React from 'react';
import MuiDialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Paper } from '../../../components';

export default function Dialog(props) {
    const { children, color, title, footer, open, onClose, ...other } = props;

    return <MuiDialog onClose={onClose} open={open} {...other}>
        <Paper color={color} variant="panel" title={title}
            action={onClose ? <IconButton color="inherit" onClick={onClose}><CloseIcon /></IconButton> : undefined}
            avatar={title.substring(0, 1)}
            footer={footer}>
            {children}
        </Paper>
    </MuiDialog>;
}
