import React from "react";
import Example from './example';
import { Figure } from '../../components'
import { Grid } from "@material-ui/core";

export default function FigureExample(props) {
    return <Example label="Figure Component" variant="h6" divider>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Example label="Without Credit">
                    <Figure color="Red"
                        src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" lightbox
                        title="Lorem Ipsum" subtitle="Simply dummy text">

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Figure>
                </Example>
            </Grid>
            <Grid item xs={12} md={4}>
                <Example label="With Credit">
                    <Figure color="Red"
                        src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" lightbox
                        title="Lorem Ipsum" subtitle="Simply dummy text" credit="w3schools">

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Figure>
                </Example>
            </Grid>
        </Grid>
    </Example>;
}