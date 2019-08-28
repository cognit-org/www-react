import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone'

const Navigation = () => {
        const useStyles = makeStyles(theme => ({
                root: {
                        flexGrow: 1,
                        width: '100%',
                        backgroundColor: theme.palette.background.paper,
                },
        }));

        const classes = useStyles();
        const [value, setValue] = React.useState(0);
        function handleChange(event, newValue) {
                setValue(newValue);
        }
        function a11yProps(index) {
                return {
                        id: `scrollable-force-tab-${index}`,
                        'aria-controls': `scrollable-force-tabpanel-${index}`,
                };
        }

        return (
                <div className={classes.root}>
                        <AppBar>
                                <Tabs value={value}
                                        onChange={handleChange}
                                        scrollButtons="on"
                                        indicatorColor='primary'
                                        textColor='primary'
                                        aria-label='cognit'>

                                        <Tab label="Item One" icon={<PhoneIcon />} {...a11yProps(0)} />
                                </Tabs>
                        </AppBar>
                </div>
        );
}

export default Navigation;