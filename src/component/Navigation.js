import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Tabs, Tab } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';


const Navigation = () => {
        const useStyles = makeStyles({
                root: {
                        flexGrow: 1,
                        maxWidth: 500,
                        backgroundColor: 'white'
                },
        });

        const classes = useStyles();
        const [value, setValue] = React.useState(0);
        function handleChange(event, newValue) {
                setValue(newValue);
        }

        return (
                <div className={classes.root} >
                        <AppBar color='background.paper'>
                                <Tabs
                                        value={value}
                                        onChange={handleChange}
                                        variant="fullWidth"
                                        indicatorColor="secondary"
                                        textColor="secondary"
                                        aria-label="icon label tabs example"
                                >
                                        <Tab icon={<PhoneIcon />} label="RECENTS" />
                                        <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                                        <Tab icon={<PersonPinIcon />} label="NEARBY" />
                                </Tabs>
                        </AppBar>
                </div>
        );
}

export default Navigation;