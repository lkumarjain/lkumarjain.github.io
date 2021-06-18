import React from 'react';
import Social from './social';
import { Nav, NavItem } from '../../../components/nav'
import Icons from '../icons';
import './layout.css';

export default function Layout(props) {
    const { config, children, className, ...rest } = props;

    return <div className={["layout", className].join(' ')} {...rest}>
        <div className="layout-content">
            <div className="layout-page">
                <div className="layout-page-header">
                    <div className="logo">
                        <a className="layout-page-title" href="/">Jain's Tech World</a>
                        <p className="layout-page-sub-title">Technology Ideas and Solutions</p>
                    </div>
                    <Social />
                </div>
                <div className="layout-page-nav">
                    <Nav title="Jain's Tech World" subtitle="Technology Ideas and Solutions" variant="navbar" color="Grey" elevated={false}>
                        {/* <NavItem variant="item"><Social /></NavItem> */}
                        {config && config.Navigations.map((navigation, index) =>
                            <Navigation key={index} value={navigation} />
                        )}
                    </Nav>
                </div>
                <div className="layout-page-content">{children}</div>
                <div className="layout-page-footer">
                </div>
            </div>
        </div>
    </div>;
}

function Navigation(props) {
    const { value } = props;

    if (value.Variant === "link") {
        return <NavItem to={value.To} label={value.Label}
            elevated={false} variant="link" icon={Icons[value.Icon]} />;
    }

    if (value.Variant === "menu") {
        return <NavItem to={value.To} label={value.Label}
            elevated={false} variant="menu" icon={Icons[value.Icon]}>
            {value.Items && value.Items.map((item, index) =>
                <Navigation key={index} value={item} />
            )}
        </NavItem>;
    }

    return "";
}