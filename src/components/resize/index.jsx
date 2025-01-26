import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

export function Resizable(props) {
    const { children, direction = "horizontal", size = 70, background = "#000" } = props;
    const margin = (100 - size) / 2;
    const [sizes, setSizes] = React.useState({ left: margin, right: margin });

    const onResize = (attribute, value) => {
        setSizes({ ...sizes, [attribute]: value });
    }

    return (
        <PanelGroup direction={direction}>
            <Panel defaultSize={sizes.left} order={1} collapsible={true}
                style={{ textAlign: "center", alignContent: "center", }}
                onResize={(value) => onResize("left", value)}>
                {sizes.left}%
            </Panel>
            <PanelResizeHandle style={{ padding: "5px", background: background }} />
            <Panel defaultSize={size} minSize={30} order={2}>
                {children}
            </Panel>
            <PanelResizeHandle style={{ padding: "5px", background: background }} />
            <Panel defaultSize={sizes.right} order={3} collapsible={true}
                style={{ textAlign: "center", alignContent: "center", }}
                onResize={(value) => onResize("right", value)}>
                {sizes.right}%
            </Panel>
        </PanelGroup>
    );
}