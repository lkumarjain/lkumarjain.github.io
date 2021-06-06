import React from 'react';
import PropTypes from 'prop-types';
import Colors from '../colors';
import './article.css';

export default function Article(props) {
    const { children, variant = "article", header, footer, color = "Grey",
        className, style = {}, contentClass, contentStyle = {}, ...rest } = props;

    return <article style={{ ...style, ...Colors[color] }}
        className={["material-".concat(variant), className].join(' ')} {...rest}>

        {header}
        <div className={["material-content", variant, contentClass].join(' ')} style={contentStyle}>
            {children}
        </div>
        {footer}
    </article>;
}

Article.propTypes = {
    color: PropTypes.oneOf(Colors.Values),
    className: PropTypes.string,
    contentClass: PropTypes.string,
    variant: PropTypes.oneOf(['article', 'section', 'panel']),
    style: PropTypes.object,
    contentStyle: PropTypes.object,
    header: PropTypes.node,
    footer: PropTypes.node,
};
