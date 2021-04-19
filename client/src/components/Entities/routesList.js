import React from 'react';
import { useHistory } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

// import { entities } from "./entitiesList"

export const RouterList = (props) => {
  const { routes } = props
  let history = useHistory();

  const toRoute = (route) => {
    history.push(`/${route}`)
  }

  return (
    <div>
      {routes.map(e => (
        <ListItem button key={e.route} onClick={() => toRoute(e.route)}>
          <ListItemIcon>
            {e.icon}
          </ListItemIcon>
          <ListItemText primary={e.title} />
        </ListItem>
      ))}
    </div>
  )
}