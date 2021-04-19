import React from 'react';
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

export default function DrawerContent(props) {
  const history = useHistory()
  const { routes, reports, classes, handleDrawerClose } = props

  const toRoute = (route = '') => history.push(`/${route}`)

  return (
    <React.Fragment>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      {/* <Typography component="p" variant="subtitle1" color="inherit" className={classes.entityTitle}>
        Home
      </Typography> */}
      <ListItem button onClick={() => toRoute()}>
        <ListItemIcon>
          <HomeIcon style={{ color: "#2ce62c" }} />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem>
      <Divider />
      <Typography component="p" variant="subtitle1" color="inherit" className={classes.entityTitle}>
        Entities
      </Typography>
      <List>{routes()}</List>
      <Divider />
      <Typography component="p" variant="subtitle1" color="inherit" className={classes.entityTitle}>
        Reports
      </Typography>
      <List>{reports()}</List>
    </React.Fragment>
  )
}