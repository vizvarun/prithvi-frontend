import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InNetworkProblems() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={8}>
        <Card className={classes.root}>
          <CardContent>A</CardContent>
        </Card>
      </Grid>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardContent>B</CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
