import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { RouterList } from "./components/Entities/routesList"
import Router from "./Router";
import { useStyles } from "./styles/makeStyles"
import Navbar from "./components/App/Navbar"
import DrawerContent from "./components/App/DrawerContent"


export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar
        classes={classes}
        open={open}
        handleDrawerOpen={() => handleDrawerOpen()}
      />
      <Drawer
        variant="permanent"
        classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
        open={open}
      >
        <DrawerContent
          render={() => <RouterList />}
          classes={classes}
          handleDrawerClose={() => handleDrawerClose()}
        />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Router />
          </Grid>
        </Container>
      </main>
    </div>
  );
}