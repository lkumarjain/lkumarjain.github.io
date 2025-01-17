import * as React from 'react';
import { Avatar, Popover } from '@mui/material';

export function ActionPopover(props) {
    const { name, icon, background, children } = props;

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => { setAnchorEl(event.currentTarget); };

    const handleClose = () => { setAnchorEl(null); };

    const open = Boolean(anchorEl);
    const id = open ? name : undefined;

    return (
        <div>
            <Avatar variant="rounded" style={{ cursor: "pointer", background: background }} onClick={handleClick}>
                {icon}
            </Avatar>

            <Popover id={id} open={open} anchorEl={anchorEl} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }}>
                {children}
            </Popover>
        </div>
    );
}
