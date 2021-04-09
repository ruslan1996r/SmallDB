import React from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

export default function DrawerContent(props) {
  const { render, classes, handleDrawerClose } = props
  return (
    <React.Fragment>
      <div className={classes.toolbarIcon}>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List>{render()}</List>
    </React.Fragment>
  )
}