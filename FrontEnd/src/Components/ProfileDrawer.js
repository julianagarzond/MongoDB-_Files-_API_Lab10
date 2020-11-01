import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EditProfile from './EditProfile';
import { Typography } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});


export default function ProfileDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
   
    bottom: false,
   
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [profile, setProfile]= React.useState({username:"julianagarzond", email:"juligardu@gmail.com"});
  const handleEditProfile=(data) => {
    setProfile(data);
 }
 
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

      <List>
        {[profile.username, profile.email].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index  === 0? <AccountCircleIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
             
          </ListItem>
        ))}
      </List>
     
      <Divider />
     
    </div>
    
  );

  return (
    <div>
        

      {['bottom'].map((anchor) => (
        <React.Fragment key={anchor}>


          <ButtonGroup>
          <Button  variant="contained" onClick={toggleDrawer(anchor, true)}> View Profile</Button>
          <EditProfile fun={handleEditProfile}/>
          </ButtonGroup>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
