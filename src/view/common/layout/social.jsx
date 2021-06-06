import React from 'react';
import { Facebook, GitHub, LinkedIn, Public } from '@material-ui/icons';
import './social.css';

export default function Social(props) {
    return <nav className="social">
        <ul className="social-inline">
            <li className="line-item facebook">
                <a href="https://www.facebook.com/lokesh.jain.1614460" rel="noreferrer" target="_blank">
                    <Facebook className="icon" />
                </a>
            </li>
            <li className="line-item github">
                <a href="https://github.com/lkumarjain" rel="noreferrer" target="_blank">
                    <GitHub className="icon" />
                </a>
            </li>
            <li className="line-item linkedin">
                <a href="https://www.linkedin.com/in/lokeshkjain" rel="noreferrer" target="_blank">
                    <LinkedIn className="icon" />
                </a>
            </li>
            <li className="line-item blog">
                <a href="https://lkumarjain.blogspot.com" rel="noreferrer" target="_blank">
                    <Public className="icon" />
                </a>
            </li>
        </ul>
    </nav>;
}