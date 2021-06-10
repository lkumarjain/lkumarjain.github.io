import { Grid } from "@material-ui/core";
import React from "react";
import { Image, Paper } from '../../components'

export default function PaperExample(props) {
    return <Grid container spacing={2}>
        <Grid item xs={12}>
            <Paper title="Apache Kafka" subtitle="AN OPEN-SOURCE DISTRIBUTED EVENT STREAMING PLATFORM"
                avatar={<Image src="https://lkumarjain.github.io/img/logo/kafka.png" alt="avatar" />} action="A"
                footer="https://lkumarjain.blogspot.com/">

                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        A logical composition of Partition having a logical name for producing and consuming records (Events) or a fundamental unit for organizing events
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper variant="panel" title="Apache Kafka" subtitle="EVENT STREAMING PLATFORM"
                            avatar="E" action="A" color="Purple"
                            footer="https://lkumarjain.blogspot.com/">

                            A logical composition of Partition having a logical name for producing and consuming records (Events) or a fundamental unit for organizing events
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    </Grid>
}