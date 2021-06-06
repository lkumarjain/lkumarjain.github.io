import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiDialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
}));

export default function Dialog(props) {
    const { children, title, titlevariant, open, onClose, ...other } = props;
    const classes = useStyles(other);

    return <MuiDialog onClose={onClose} open={open} {...other}>
        <DialogTitle onClose={onClose}>
            <Typography color="textSecondary" variant={titlevariant}>{title}</Typography>
            {onClose ? (<IconButton className={classes.closeButton} onClick={onClose}>
                <CloseIcon />
            </IconButton>) : null}
        </DialogTitle>

        {children}
    </MuiDialog>;
}
