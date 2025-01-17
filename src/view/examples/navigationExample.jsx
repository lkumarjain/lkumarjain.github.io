import React from "react";
import { Home } from "@mui/icons-material";
import { Nav, NavItem } from '../../components';
import Example from './example';

export default function NavigationExample(props) {
    return <Example label="Nav Component" variant="h6" divider>
        <Example label="Navbar">
            <Navigation variant="navbar" itemvariant="menu" />
        </Example>

        <Example label="Accordion">
            <Navigation variant="accordion" itemvariant="accordion" />
        </Example>
    </Example>;
}

function Navigation(props) {
    const { variant, itemvariant } = props;

    return <Nav title="Title" subtitle="Subtitle" variant={variant}>
        <NavItem to="#Home" label="Home" variant="link" icon={<Home />} />
        <NavItem to="#About" label="About" variant={itemvariant} icon={<Home />}>
            <NavItem to="#Company" label="Company" variant="link" />
            <NavItem to="#Team" label="Team" variant="link" />
            <NavItem to="#Careers" label="Careers" variant="link" />
        </NavItem>
        <NavItem to="#Services" label="Services" variant={itemvariant} icon={<Home />}>
            <NavItem to="#Bring" label="Bring" variant="link" />
            <NavItem to="#Deliver" label="Deliver" variant={itemvariant}>
                <NavItem to="#Bring" label="Food" variant="link" />
                <NavItem to="#Bring" label="Hardware" variant="link" />
                <NavItem to="#Bring" label="Electronics" variant="link" />
            </NavItem>
            <NavItem to="#Package" label="Package" variant="link" />
            <NavItem to="#Express" label="Express" variant="link" />
        </NavItem>
        <NavItem to="#Partners" label="Partners" icon={<Home />} variant="link" />
        <NavItem to="#Contact" label="Contact" icon={<Home />} variant="link" />
    </Nav>;
}