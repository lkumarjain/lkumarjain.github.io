import { Grid } from "@material-ui/core";
import React from "react";
import { Article, Header, Navigation, NavigationItem, NavigationLink } from '../../components'

export default function NavigationExample(props) {
    return <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={4}>
            <Article color="Grey" variant="panel"
                header={<Header variant="panel" title="Without Sub Section" align="left" />}>
                <Navigation color="Grey" variant="vertical">
                    <NavigationLink to="#" name="Link 1" />
                    <NavigationLink to="#" name="Link 2" />
                    <NavigationLink to="#" name="Link 3" />
                    <NavigationLink to="#" name="Link 4" />
                </Navigation>
            </Article>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Article color="Grey" variant="panel"
                header={<Header variant="panel" title="Combination" align="left" />}>
                <Navigation color="Grey" variant="vertical">
                    <NavigationLink to="#" name="Link 1" />
                    <NavigationLink to="#" name="Link 2" />
                    <NavigationItem name="Link 3">
                        <NavigationLink to="#" name="Sub Link 1" />
                        <NavigationLink to="#" name="Sub Link 2" />
                    </NavigationItem>
                    <NavigationLink to="#" name="Link 4" />
                </Navigation>
            </Article>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
            <Article color="Grey" variant="panel"
                header={<Header variant="panel" title="With Sub Section" align="left" />}>
                <Navigation color="Grey" variant="vertical">
                    <NavigationItem name="Link 1">
                        <NavigationLink to="#" name="Sub Link 1" />
                        <NavigationLink to="#" name="Sub Link 2" />
                    </NavigationItem>
                    <NavigationItem name="Link 2">
                        <NavigationLink to="#" name="Sub Link 1" />
                        <NavigationLink to="#" name="Sub Link 2" />
                    </NavigationItem>
                    <NavigationItem name="Link 3">
                        <NavigationLink to="#" name="Sub Link 1" />
                        <NavigationLink to="#" name="Sub Link 2" />
                    </NavigationItem>
                    <NavigationItem name="Link 4">
                        <NavigationLink to="#" name="Sub Link 1" />
                        <NavigationLink to="#" name="Sub Link 2" />
                    </NavigationItem>
                </Navigation>
            </Article>
        </Grid>
    </Grid>;
}