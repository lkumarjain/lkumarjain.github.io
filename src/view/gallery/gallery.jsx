import { Grid } from "@mui/material";
import React from "react";
import { Figure, Image, Paper } from "../../components";

export default function Gallery(props) {
    const { path } = props;

    const [record, setRecord] = React.useState({});

    if (!record || Object.keys(record).length === 0) {
        fetch(path).then(function (response) {
            return response.json();
        }).then(function (result) {
            setRecord(result)
        });
        return "";
    }

    return <Paper color={record.Color} style={record.Style}
        title={record.Title} subtitle={record.Subtitle}
        avatar={record.Avatar ? <Image src={record.Avatar} alt={record.Title} /> : record.Title && record.Title.substring(0, 1)}
        footer={record.Footer}>
        <Grid container spacing={2}>
            {record.Items && record.Items.map((result, i) => (
                <Grid item xs={12} md={result.Column} key={i}>
                    <Figure color={record.ItemColor} style={{ height: "calc(100% - 10px)" }}
                        src={result.Image} alt={result.Title} lightbox
                        title={result.Title} subtitle={result.Subtitle}>

                        {result.Description}
                    </Figure>
                </Grid>
            ))}
        </Grid>
    </Paper>;
}