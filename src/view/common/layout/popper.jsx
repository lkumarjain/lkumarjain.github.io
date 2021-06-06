import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Fab } from '@material-ui/core';
import { Article, Header, Navigation, NavigationLink } from '../../../components'
import './popper.css';

export default function Popper(props) {
    const { config } = props;
    const [open, setOpen] = React.useState(false);
    const handleClick = () => setOpen(!open);

    return <React.Fragment>
        <Fab className="popper-fab" onClick={handleClick}>
            <MenuIcon color="action" />
        </Fab>
        {open && <div className="popper-page">
            {config && config.Navigations.map((navigation, index) =>
                <NavigationLinkGenerator key={index} header={navigation.Name} record={navigation.Items} />
            )}
        </div>
        }
    </React.Fragment>
}

function NavigationLinkGenerator(props) {
    const { header, record } = props;

    return <Article color="Grey" variant="panel"
        header={<Header variant="panel" title={header} align="left" />}>
        <Navigation color="Grey" variant="vertical">
            {record && record.length > 0 && record.map((item) =>
                <NavigationLink key={item.Key} to={item.URI} name={item.Name} />
            )}
        </Navigation>
    </Article>;
}