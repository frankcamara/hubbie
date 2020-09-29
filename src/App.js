import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppDrawer from './AppDrawer/AppDrawer';
import Blog from './Blog/Blog';


const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppDrawer>
        <Blog />
      </AppDrawer>
    </div>
  );
}
