import { Grid } from "@material-ui/core";
import React from "react";
import { Article, Footer, Header } from '../../components'

export default function PanelExample(props) {
    return <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
            <Article color="Grey" variant="panel"
                header = {<Header variant="panel" title="Header" subtitle="Sub Title" align="left" />}
                footer={<Footer variant="panel">Footer</Footer>}>
                    
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

            </Article>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Article color="Red" variant="section"
                header={<Header variant="section" title="Header" 
                subtitle="Sub Title" avatar="https://www.w3schools.com/howto/img_snow.jpg" />}
                footer={<Footer variant="section">Footer</Footer>}>

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                
            </Article>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Article color="Pink" variant="article"
                header={<Header variant="article" title="Header" pattern="paper" 
                subtitle="Sub Title" avatar="https://www.w3schools.com/howto/img_snow.jpg" />}
                footer={<Footer variant="article">Footer</Footer>}>

                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                
            </Article>
        </Grid>
    </Grid>
}