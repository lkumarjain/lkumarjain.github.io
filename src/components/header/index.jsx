import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../colors';
import './header.css';
import Image from '../image';

export default function Header(props) {
    const { className, variant = "panel", align = "center", pattern = '', color, title, subtitle, action, avatar, ...rest } = props;

    return <div style={color ? Colors[color] : {}}
        className={["material-header", variant, pattern, "align-".concat(align), className].join(' ')} {...rest}>

        <div className="title">{title}</div>
        {subtitle && <div className="subtitle">{subtitle}</div>}

        {action && <span className="action">{action}</span>}

        {avatar &&
            <div className="avatar-container">
                <Image src={avatar} alt="avatar" variant="avatar"
                    pattern={variant === "standalone" ? "heptagon" : variant === "section" ? "nonagon" : ''} />
            </div>
        }
    </div>
}

Header.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['standalone', 'article', 'section', 'panel']),
    align: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
    pattern: PropTypes.oneOf(['', 'dot-box', 'isometric', 'moon', 'paper', 'rectangles', 'rhombus', 'triangle', 'wave', 'zigzag']),
    color: PropTypes.string,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    action: PropTypes.element,
    avatar: PropTypes.string,
};


