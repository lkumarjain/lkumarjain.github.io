import React from 'react';
import Social from './social';
import Popper from './popper';
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
                <div className="layout-page-content">{children}</div>
                <div className="layout-page-footer">
                </div>
            </div>
        </div>
        <Popper config={config} />
    </div>;
}