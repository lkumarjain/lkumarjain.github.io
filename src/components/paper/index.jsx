import React from "react";
import PropTypes from 'prop-types';
import { Colors } from "../../components";
import './paper.css'

export default function Paper(props) {
    const { children, variant = "infographics", color = "Red", className, style = {},
        title, subtitle, avatar, action, footer, ...rest } = props;

    return <article style={{ ...style, ...Colors[color] }}
        className={["jn-paper", variant, className].join(' ')} {...rest}>

        {title &&
            <header className={["jn-paper-header", variant].join(' ')}>
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                {action && <div className="action">{action}</div>}
                {avatar && <div className="avatar"> {avatar}</div>}
            </header>
        }

        {children && <section className={["jn-paper-content", variant].join(' ')}>{children}</section>}

        {footer && <footer className={["jn-paper-footer", variant].join(' ')}>{footer}</footer>}
    </article>
}


Paper.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['infographics', 'panel']),
    color: PropTypes.oneOf(Colors.Values),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    action: PropTypes.node,
    avatar: PropTypes.node,
    footer: PropTypes.node,
};

