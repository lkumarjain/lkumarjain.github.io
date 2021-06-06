import React from 'react';
import { BrowserRouter as Router, Switch, Route, useParams, useLocation } from "react-router-dom";
import Layout from './view/common/layout';

import Components from './view/components';
import Home from './view/home';
import { Infographic } from './view/infographic';
import { Gallery } from './view/gallery';

export default function Application(props) {
    const [config, setConfig] = React.useState([]);

    if (!config || config.length === 0) {
        fetch("/configuration.json").then(function (response) {
            return response.json();
        }).then(function (record) {
            console.log(record)
            setConfig(record)
        });
        return "";
    }

    return <Router>
        <Layout config={config}>
            <RouteGenerator config={config} />
        </Layout>
    </Router>
}

function InfographicHandler() {
    //`useParams` hook is used for accessing Path Param.
    let { key } = useParams();

    //`useLocation` hook is used for accessing Query Param.
    let query = new URLSearchParams(useLocation().search);

    return <Infographic path={"/data/infographics/" + key + ".json"} hasAction={query.get("action") === "Show"} />
}

function GalleryHandler() {
    //`useParams` hook is used for accessing Path Param.
    let { key } = useParams();

    //`useLocation` hook is used for accessing Query Param.
    let query = new URLSearchParams(useLocation().search);

    return <Gallery path={"/data/gallery/" + key + ".json"} hasAction={query.get("action") === "Show"} />;
}

function RouteGenerator(props) {
    const { config } = props;
    return <Switch>
        <Route exact path="/" children={<Home config={config} />} />
        <Route exact path="/components" children={<Components />} />
        <Route exact path="/gallery/:key" children={<GalleryHandler />} />
        <Route path="/infographics/:key" children={<InfographicHandler />} />
    </Switch>;
}
