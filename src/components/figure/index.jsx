import React from 'react';
import PropTypes from 'prop-types';
import './figure.css';
import Image from '../image';
import colors from '../colors';

export default function Figure(props) {
    const { src, alt, lightbox = false, variant = "default", pattern = "",
        title, subtitle, credit, children,
        color, className, style = {}, ...rest } = props;

    return <figure style={{ ...style, ...colors[color] }}
        className={["jn-figure", variant, pattern, className].join(' ')} {...rest}>
        <div className="jn-figure-content">
            {title &&
                <header className={["jn-figure-header", variant].join(' ')}>
                    <div className="title">{title}</div>
                    {subtitle && <div className="subtitle">{subtitle}</div>}
                </header>
            }
            {src && <Image src={src} alt={alt} lightbox={lightbox} credit={credit} className="jn-figure-image" />}

            {children && <figcaption className="jn-figure-caption">{children}</figcaption>}
        </div>
    </figure>;
}

Figure.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.oneOf(colors.Values),
    variant: PropTypes.oneOf(['default']),
    pattern: PropTypes.oneOf(['']),
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    lightbox: PropTypes.bool,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    credit: PropTypes.node,
};
