import { Typography } from '@mui/material';
import { Paper } from '../../components';
import { Snap } from '../../components/code/snap';


export default function CodeSnap() {
    return (
        <Paper color="Red" footer="https://lkumarjain.blogspot.com/">
            <Typography variant="h6" align='center'>Create and share beautiful images of your source code</Typography>
            <Typography variant="h6" align='center'>Start typing into the text area to get started.</Typography>
            <Snap filename="Program.go" />
        </Paper>
    )
}