import React from "react";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import './index.css';
import { TextField } from "@mui/material";

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
            <ResizeHandle className="jn-resize-handle" />
            <Panel defaultSize={size} minSize={30} order={2}>
                {children}
            </Panel>
            <ResizeHandle className="jn-resize-handle" />
            <Panel defaultSize={sizes.right} order={3} collapsible={true}
                style={{ textAlign: "center", alignContent: "center", }}
                onResize={(value) => onResize("right", value)}>
                {sizes.right}%
            </Panel>
        </PanelGroup>
    );
}

function ResizeHandle(props) {
    return (
        <PanelResizeHandle className="jn-resize-handle">
            <div className="jn-resize-handle-inner">
                <svg className="jn-resize-handle-icon" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M8,18H11V15H2V13H22V15H13V18H16L12,22L8,18M12,2L8,6H11V9H2V11H22V9H13V6H16L12,2Z" />
                </svg>
            </div>
        </PanelResizeHandle>
    );
}
