import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../colors';
import './footer.css';

export default function Footer(props) {
    const { children, variant = "article", align = "center", className, color, ...rest } = props;

    return <div style={color ? Colors[color] : {}} className={["material-footer", variant, "align-".concat(align), className].join(' ')} {...rest}>
        {children}
    </div>;
}

Footer.propTypes = {
    className: PropTypes.string,
    variant: PropTypes.oneOf(['article', 'section', 'panel']),
    color: PropTypes.string,
};
