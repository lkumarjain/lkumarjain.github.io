import React from "react";
import Example from './example';
import { Image, Paper } from '../../components'

export default function PaperExample(props) {
    return <Example label="Paper Component" variant="h6" divider>
        <Example label="Default Paper">
            <Component />
        </Example>

        <Example label="Panel Paper">
            <Component variant="panel" />
        </Example>
    </Example>;
}

function Component(props) {
    const { variant } = props;

    return <Paper title="Lorem Ipsum" subtitle="Lorem Ipsum is simply dummy text of the printing"
        avatar={<Image src="https://lkumarjain.github.io/img/logo/kafka.png" alt="avatar" />}
        variant={variant} action="L" footer="https://lkumarjain.blogspot.com/">

        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </Paper>;
}