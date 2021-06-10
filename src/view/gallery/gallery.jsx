import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Article, Footer, Header, Image, Paper } from "../../components";

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

    return <Article variant="section" color={record.Color}
        header={<Header variant="section" title={record.Title}
            subtitle={record.Subtitle} avatar={record.Image} />
        } footer={record.Footer ? <Footer variant="section">{record.Footer}</Footer> : undefined}>

        <Grid container spacing={2}>
            {record.Items && record.Items.map((result, i) => (
                <Grid item xs={12} md={result.Column} key={i} >
                    <GalleryItem record={result} color={record.ItemColor} />
                </Grid>
            ))}
        </Grid>

    </Article>;
}

function GalleryItem(props) {
    const { record, color } = props;
    return <Paper variant="panel" color={color} style={{ height: "100%" }}
        title={record.Title} subtitle={record.Subtitle}
        footer={<Typography variant="panel" align="justify">{record.Description}</Typography>}>

        <Image src={record.Image} alt={record.Title} lightbox />
    </Paper>
}