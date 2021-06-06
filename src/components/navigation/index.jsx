import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import Colors from '../colors';
import './navigation.css';

function Navigation(props) {
    const { color = "Grey", variant = "vertical", className, children, ...rest } = props;
    return <ul style={Colors[color]} className={["navigation", className, variant].join(' ')} {...rest}>
        {children}
    </ul>;
}

Navigation.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    variant: PropTypes.string,
};

function NavigationItem(props) {
    const { name, color, className, children, ...rest } = props;
    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(!open);

    return <li style={color ? Colors[color] : {}} {...rest}>
        {name && <span className={["navigation-item", className, open ? "active" : ""].join(' ')} onClick={handleClick}>{name}</span>}
        {open && children && <ul className="sub-navigation">{children}</ul>}
    </li>;
}

NavigationItem.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
};


function NavigationLink(props) {
    const { to, name, color, className, children, ...rest } = props;
    return <li style={color ? Colors[color] : {}} {...rest}>
        <Link className={["navigation-link", className].join(' ')} to={to}>
            {name}
        </Link>
    </li>;
}

NavigationLink.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
};

export { Navigation, NavigationItem, NavigationLink }