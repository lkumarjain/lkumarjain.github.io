import React from 'react';
import { Infographics } from './infographics';

export default function Home(props) {
    const { config } = props;
    return <Infographics path={config.Home} config={config} />;
}
