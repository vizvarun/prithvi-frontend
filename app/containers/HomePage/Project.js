import React from 'react';
import { Link } from 'react-router-dom';
import './proposals.css';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ProjectList from './ProjectList';

const useStyles = makeStyles({
  root: {
    minWidth: 'fit-content',
    minHeight: '45vh',
    textAlign: 'center',
    borderRadius: 15,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
    border: '1px solid rgba(0,0,0,0.15)',
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

export default function Project() {
  const classes = useStyles();

  return (
    <>
      <div className="proposals-head">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/home">
            <ArrowBackIcon style={{ width: '18px', height: '18px' }} />
          </Link>
          <h3 style={{ paddingLeft: '20px' }}>Projects</h3>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={11}>
          <Card className={classes.root}>
            <CardContent>
              <ProjectList />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={1}>
          <Card className={classes.root}>
            <Link to="/createProject">
              <CardContent style={{ cursor: 'pointer' }}>
                <AddCircleIcon fontSize="large" color="primary" />
                {/* <Typography color="primary" style={{ marginTop: '20px' }}>
                ADD
              </Typography> */}
              </CardContent>
            </Link>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
