import { Home } from "@material-ui/icons";
import React from "react";
import Colors from '../../components/colors'
import { Nav, NavItem } from '../../components/nav'

import './playground.css'

const vVariant = "menu";//"accordion"; //
const vVariantNav = "navbar"; //"accordion"; //

export default function Playground(props) {
    return <Nav title="Nav Bar" subtitle="Nav Bar Example" variant={vVariantNav}>
        <NavItem to="#Home" label="Home" variant="link" icon={<Home />} />
        <NavItem to="#About" label="About" variant={vVariant} icon={<Home />}>
            <NavItem to="#Company" label="Company" variant="link" />
            <NavItem to="#Team" label="Team" variant="link" />
            <NavItem to="#Careers" label="Careers" variant="link" />
        </NavItem>
        <NavItem to="#Services" label="Services" variant={vVariant}>
            <NavItem to="#Bring" label="Bring" variant="link" />
            <NavItem to="#Deliver" label="Deliver" variant={vVariant}>
                <NavItem to="#Bring" label="Food" variant="link" />
                <NavItem to="#Bring" label="Hardware" variant="link" />
                <NavItem to="#Bring" label="Electronics" variant="link" />
            </NavItem>
            <NavItem to="#Package" label="Package" variant="link" />
            <NavItem to="#Express" label="Express" variant="link" />
        </NavItem>
        <NavItem to="#Partners" label="Partners" variant="link" />
        <NavItem to="#Contact" label="Contact" variant="link" />
    </Nav>













    // <nav className="jn-navbar" style={Colors["Grey"]}>
    //     <a href="#home">Home</a>
    //     <div class="subnav">
    //         <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    //         <div class="subnav-content">
    //             <a href="#company">Company</a>
    //             <a href="#team">Team</a>
    //             <div class="subnav">
    //                 <button class="subnavbtn">About <i class="fa fa-caret-down"></i></button>
    //                 <div class="subnav-content">
    //                     <a href="#company">Company</a>
    //                     <a href="#team">Team</a>
    //                     <a href="#careers">Careers</a>
    //                 </div>
    //             </div>
    //             <a href="#careers">Careers</a>
    //         </div>
    //     </div>
    //     <div class="subnav">
    //         <button class="subnavbtn">Services <i class="fa fa-caret-down"></i></button>
    //         <div class="subnav-content">
    //             <a href="#bring">Bring</a>
    //             <a href="#deliver">Deliver</a>
    //             <a href="#package">Package</a>
    //             <a href="#express">Express</a>
    //         </div>
    //     </div>
    //     <div class="subnav">
    //         <button class="subnavbtn">Partners <i class="fa fa-caret-down"></i></button>
    //         <div class="subnav-content">
    //             <a href="#link1">Link 1</a>
    //             <a href="#link2">Link 2</a>
    //             <a href="#link3">Link 3</a>
    //             <a href="#link4">Link 4</a>
    //         </div>
    //     </div>
    //     <a href="#contact">Contact</a>
    //     <div style={{ clear: "both" }}></div>
    // </nav>
}
