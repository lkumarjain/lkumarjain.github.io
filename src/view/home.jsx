import React from 'react';
import { Infographic } from './infographic';

export default function Home(props) {
    const { config } = props;
    return <Infographic path={config.Home} />;
}
