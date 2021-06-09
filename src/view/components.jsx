import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import { Image } from "../components";
import NavigationExample from "./examples/navigationExample";
import PanelExample from "./examples/panelExample";
import PaperExample from "./examples/paperExample";
import TimelineExample from "./examples/timelineExample";

export default function Components(props) {
    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Timeline Component</Typography>
                    <TimelineExample />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Paper Component</Typography>
                    <PaperExample />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Navigation Component</Typography>
                    <NavigationExample />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Panel Component</Typography>
                    <PanelExample />
                </CardContent>
            </Card>
        </Grid>
        <Grid item xs={4}>
            <Image src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" />
        </Grid>
        <Grid item xs={4}>
            <Image src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" variant="avatar" />
        </Grid>
        <Grid item xs={4}>
            <Image src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" pattern="decagon" />
        </Grid>
    </Grid>
}
