import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useLocation } from "react-router-dom";
import Layout from './view/common/layout';

import Components from './view/components';
import Home from './view/home';
import { Infographics } from './view/infographics';
import { Gallery } from './view/gallery';
import Playground from './view/playground';
import CodeSnap from './view/codesnap';

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

function InfographicsHandler(props) {
    const { config } = props;

    //`useParams` hook is used for accessing Path Param.
    let { key } = useParams();

    //`useLocation` hook is used for accessing Query Param.
    let query = new URLSearchParams(useLocation().search);

    return <Infographics config={config} path={"/data/infographics/" + key + ".json"} hasAction={query.get("action") === "Show"} />
}

function GalleryHandler() {
    //`useParams` hook is used for accessing Path Param.
    let { key } = useParams();

    //`useLocation` hook is used for accessing Query Param.
    let query = new URLSearchParams(useLocation().search);

    return <Gallery path={"/data/gallery/" + key + ".json"} hasAction={query.get("action") === "Show"} />;
}


function ComponentHandler() {
    //`useParams` hook is used for accessing Path Param.
    let { key } = useParams();

    return <Components component={key} />;
}

function RouteGenerator(props) {
    const { config } = props;
    return <Routes>
        <Route exact path="/" element={<Home config={config} />} />
        <Route exact path="/playground" element={<Playground />} />
        <Route exact path="/components/:key" element={<ComponentHandler />} />
        <Route exact path="/gallery/:key" element={<GalleryHandler />} />
        <Route path="/infographics/:key" element={<InfographicsHandler config={config} />} />
        <Route path="/codesnippet" element={<CodeSnap />} />
    </Routes>;
}
