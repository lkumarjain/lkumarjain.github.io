import PropTypes from 'prop-types';
import React from 'react';
import { Link } from "react-router-dom";
import Colors from '../colors';
import './nav.css';

const vNavbar = "navbar";
const vAccordion = "accordion";

function Nav(props) {
    const { title, subtitle, color = "Red", variant = vNavbar,
        elevated = true, className, style = {}, children, ...rest } = props;

    const [active, setActive] = React.useState(false);
    const handleClick = () => setActive(!active);

    return <nav style={{ ...Colors[color], ...style }}
        className={["jn-nav", className, elevated ? "jn-elevated" : "", variant].join(' ')} {...rest}>

        {title &&
            <header className={["jn-nav-header", active ? "active" : "", variant].join(' ')}>
                <div className="title">{title}</div>
                {subtitle && <div className="subtitle">{subtitle}</div>}
                <div className="action" onClick={handleClick}>≡</div>
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
    elevated: PropTypes.bool,
};

const vItem = "item";
const vLink = "link";
const vMenu = "menu";

function NavItem(props) {
    const { to, label, icon, variant = vLink,
        elevated = true, expanded = false,
        className, children, ...rest } = props;

    const size = useWindowSize();

    const [open, setOpen] = React.useState(variant === vAccordion ? expanded : false);
    const handleEnter = () => setOpen(true);
    const handleLeave = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    if (variant === vLink) {
        return <Link className={["jn-nav-link", "jn-nav-item", "jn-nav-divider", className].join(' ')} to={to} {...rest}>
            {icon} {label}
        </Link>
    }

    if (variant === vMenu && size.width > 620) {
        return <div className={["jn-sub-nav", "jn-nav-divider", className].join(' ')} {...rest} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
            <button className={["jn-nav-btn", "jn-nav-item", open ? "active" : ""].join(' ')}>{icon} {label}</button>
            {open && children &&
                <div className={["jn-sub-nav-content", elevated ? "jn-elevated" : "", open ? "active" : ""].join(' ')}>
                    {children}
                </div>
            }
        </div>;
    }

    if ((variant === vMenu && size.width <= 620) || variant === vAccordion) {
        return <div className={["jn-sub-nav", "jn-nav-divider", className].join(' ')} {...rest}>
            <button className={["jn-nav-btn", "jn-nav-item", open ? "active" : ""].join(' ')} onClick={handleClick}>{icon} {label}</button>
            {open && children &&
                <div className={["jn-sub-nav-content", elevated ? "jn-elevated" : "", open ? "active" : ""].join(' ')}>
                    {children}
                </div>
            }
        </div>;
    }

    return <div className={["jn-nav-divider", className].join(' ')}> {children} </div>;
}

NavItem.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.node,
    variant: PropTypes.oneOf([vItem, vLink, vMenu, vAccordion]),
    className: PropTypes.string,
    elevated: PropTypes.bool,
    expanded: PropTypes.bool,
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