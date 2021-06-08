import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import PropTypes from 'prop-types';
import { Colors, Image } from "../../components";
import './playground.css'

export default function Playground(props) {
    return <Card elevation={0}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Playgound</Typography>
            <Section title="Apache Kafka" subtitle="AN OPEN-SOURCE DISTRIBUTED EVENT STREAMING PLATFORM"
                avatar="E" action="A"
                footer="https://lkumarjain.blogspot.com/">

                A logical composition of Partition having a logical name for producing and consuming records (Events) or a fundamental unit for organizing events
            </Section>
        </CardContent>
    </Card>
}

function Section(props) {
    const { children, variant = "default", color = "Red", className, style = {},
        title, subtitle, avatar, action, footer, ...rest } = props;

    return <article style={{ ...style, ...Colors[color] }}
        className={["jn-section", variant, className].join(' ')} {...rest}>

        {title &&
            <header className="jn-section-header">
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                {action && <div className="action">{action}</div>}
                {avatar && <div className="avatar"> {avatar}</div>}
            </header>
        }

        {children && <section className="jn-section-content">{children}</section>}

        {footer && <footer className="jn-section-footer">{footer}</footer>}
    </article>
}


Section.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    variant: PropTypes.oneOf(['default', 'section']),
    color: PropTypes.oneOf(Colors.Values),
    title: PropTypes.string,
    subtitle: PropTypes.string,
    action: PropTypes.node,
    avatar: PropTypes.node,
    footer: PropTypes.node,
};

