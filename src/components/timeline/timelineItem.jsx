import React from "react";
import PropTypes from 'prop-types';
import { Colors, } from "../../components";
import './timelineItem.css'

export default function TimelineItem(props) {
    const { children, variant = "default", color = "Red", className, style = {},
        title, subtitle, avatar, action, ...rest } = props;

    return <li style={{ ...style, ...Colors[color] }}
        className={["jn-timeline-item", variant, className].join(' ')} {...rest}>
        {title &&
            <header className="jn-timeline-item-header">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                {action && <div className="action">{action}</div>}
                {avatar && <div className="avatar"> {avatar}</div>}
            </header>
        }

        {children && <div className="jn-timeline-item-content">{children}</div>}
    </li>;
}

TimelineItem.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['default']),
    color: PropTypes.oneOf(Colors.Values),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    action: PropTypes.node,
    avatar: PropTypes.node,
};

