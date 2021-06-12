import React from "react";
import Figure from "../../components/figure";
import './playground.css'

export default function Playground(props) {
    return <>
        <Figure color="Red" src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow"
            title="Title" subtitle="Sub Title" lightbox>

            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
    </Figure>

        <Figure color="Red" src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow"
            title="Title" subtitle="Sub Title" >

            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

    </Figure>

        <Figure color="Red" src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow"
            title="Title" subtitle="Sub Title" >

            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

    </Figure>

        <Figure color="Red" src="https://www.w3schools.com/howto/img_snow.jpg" alt="img_snow"
            title="Title" subtitle="Sub Title" >

            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s

    </Figure>
    </>;


}
