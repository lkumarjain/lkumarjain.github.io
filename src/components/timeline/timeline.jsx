
import React from "react";
import PropTypes from 'prop-types';
import { Colors } from "..";
import './timeline.css'

export default function Timeline(props) {
    const { children, variant = "infographic", color = "Red",
        layout = "layout-3321", className, style = {},
        title, subtitle, avatar, action, footer, ...rest } = props;

    return <div style={{ ...style, ...Colors[color] }}
        className={["jn-timeline", variant, className].join(' ')} {...rest}>

        {(title || action) &&
            <header className="jn-timeline-header">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                {action && <div className="action">{action}</div>}
                {avatar && <div className="avatar"> {avatar}</div>}
            </header>
        }

        {children && <ol className={["jn-timeline-items", variant, layout].join(' ')}>{children}</ol>}
        <div className="jn-timeline-clearfix"></div>
        {footer && <footer className="jn-timeline-footer">{footer}</footer>}
    </div>
}

Timeline.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['infographic']),
    layout: PropTypes.oneOf(['layout-4321', 'layout-3321', 'layout-3221', 'layout-2221', 'layout-2211', 'layout-2111', 'layout-1111']),
    color: PropTypes.oneOf(Colors.Values),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    action: PropTypes.node,
    avatar: PropTypes.node,
    footer: PropTypes.node,
};