import React from "react";
import Example from './example';
import { Oops } from '../../components'

export default function OopsExample(props) {
    return <Example label="Oops Component" variant="h6" divider>
        <Oops />
    </Example>;
}