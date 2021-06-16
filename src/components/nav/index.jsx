import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import Colors from '../colors';
import './nav.css';

const vNavbar = "navbar";
const vAccordion = "accordion";

function Nav(props) {
    const { title, subtitle, color = "Red", variant = vNavbar,
        className, style = {}, children, ...rest } = props;

    const [active, setActive] = React.useState(false);
    const handleClick = () => setActive(!active);

    return <nav style={{ ...Colors[color], ...style }}
        className={["jn-nav", className, variant].join(' ')} {...rest}>

        {title &&
            <header className={["jn-nav-header", variant].join(' ')}>
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                <div className="action" onClick={handleClick}>A</div>
            </header>
        }

        {children && <div className={["jn-nav-content", active ? "active" : ""].join(' ')}>{children}</div>}

        <div style={{ clear: "both" }}></div>
    </nav>;
}

Nav.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    color: PropTypes.oneOf(Colors.Values),
    variant: PropTypes.oneOf([vNavbar, vAccordion]),
    style: PropTypes.object,
};

const vItem = "item";
const vLink = "link";
const vMenu = "menu";

function NavItem(props) {
    const { to, label, icon, variant = vItem,
        className, children, ...rest } = props;

    const [open, setOpen] = React.useState(false);
    const handleEnter = () => setOpen(true);
    const handleLeave = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    const size = useWindowSize();

    if (variant === vLink) {
        return <Link className={["jn-nav-link", className].join(' ')} to={to} {...rest}>
            {icon} {label}
        </Link>
    }

    if (variant === vMenu && size.width > 620) {
        return <div className="jn-sub-nav" {...rest} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button className={["jn-nav-btn", className, open ? "active" : ""].join(' ')}>{icon} {label}</button>
            {open && children && <div className="jn-sub-nav-content"> {children}</div>}
        </div>;
    }

    if ((variant === vMenu && size.width <= 620) || variant === vAccordion) {
        return <div className={["jn-sub-nav", className].join(' ')} {...rest}>
            <button className={["jn-nav-btn", open ? "active" : ""].join(' ')} onClick={handleClick}>{icon} {label}</button>
            {open && children && <div className="jn-sub-nav-content"> {children}</div>}
        </div>;
    }


    return <div className={className}> {children} </div>;
}

NavItem.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.node,
    variant: PropTypes.oneOf([vItem, vLink, vMenu, vAccordion]),
    className: PropTypes.string,
}

function useWindowSize() {
    const [windowSize, setWindowSize] = React.useState({ width: undefined, height: undefined });
    React.useEffect(() => {
        function handleResize() { setWindowSize({ width: window.innerWidth, height: window.innerHeight }); }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export { Nav, NavItem }