import React from "react";
import PropTypes from 'prop-types';
import { Resizable } from 're-resizable';
import './index.css';

export function ResizePanel(props) {
    const { children, bounds = "window", minWidth = "30%", width = "70%", maxWidth = "100%", height = "auto" } = props;

    return (
        <Resizable className="jn-resize" handleWrapperClass="jn-resize-wrapper" defaultSize={{ width: width, height: height }}
            minWidth={minWidth} maxWidth={maxWidth} bounds={bounds}
            enable={{ top: false, right: true, bottom: false, left: true, topRight: false, bottomRight: false, bottomLeft: false, topLeft: false }}>
            {children}
        </Resizable>
    );
}


ResizePanel.propTypes = {
    bounds: PropTypes.oneOf(["parent", "window"]),
    minWidth: PropTypes.string,
    width: PropTypes.string,
    maxWidth: PropTypes.string,
    height: PropTypes.string,
};
