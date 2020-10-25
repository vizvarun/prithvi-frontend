import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
    border: '1px solid rgba(0,0,0,0.15)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    minWidth: '40vw',
  },
  input: {
    display: 'none',
  },
});

export default function AdditionalCommentCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <input
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.text}
              id="outlined-basic"
              label="Additional Comment"
              variant="outlined"
            />
          </form>

          <Button
            variant="contained"
            color="primary"
            style={{
              textTransform: 'none',
              marginLeft: '50px',
              height: '50%',
            }}
          >
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
