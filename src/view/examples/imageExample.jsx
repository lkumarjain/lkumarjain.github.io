import React from "react";
import Example from './example';
import { Image } from '../../components'
import { Grid } from "@mui/material";

const patterns = ['', 'bevel', 'circle', 'decagon', 'ellipse', 'heptagon', 'hexagon', 'message', 'nonagon', 'octagon', 'parallelogram', 'pentagon', 'rabbet', 'rhombus'];

export default function ImageExample(props) {
    return <Example label="Image Component" variant="h6" divider>
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Example label="Default Image">
                    <Image src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" lightbox />
                </Example>
            </Grid>
            <Grid item xs={12} md={4}>
                <Example label="Image Credit">
                    <Image src="https://www.w3schools.com/howto/img_snow.jpg" credit="W3 Schools" alt="img_snow" lightbox />
                </Example>
            </Grid>
            <Grid item xs={12} md={4}>
                <Example label="Image Pattern">
                    <Image src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow" pattern="circle" lightbox />
                </Example>
            </Grid>
            <Grid item xs={12} md={12}>
                <Example label="Avatar Image">
                    {patterns.map((pattern, index) =>
                        <Image key={index} src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow"
                            variant="avatar" pattern={pattern} style={{ margin: "5px", float: "left" }} />
                    )}
                </Example>
            </Grid>
        </Grid>



    </Example>;
}