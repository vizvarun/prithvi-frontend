import React from 'react';
import Grid from '@material-ui/core/Grid';

const cardStyle = {
  minHeight: '100px',
  display: 'flex',
  alignItems: 'center',
  marginTop: '20px',
  minWidth: 275,
  borderRadius: 15,
  boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
  border: '1px solid rgba(0,0,0,0.15)',
};

function Patents(props) {
  return (
    <div className="PICard" style={cardStyle}>
      {/* eslint-disable */}
      <Grid container spacing={3} style={{ marginLeft: '25px' }}>
        <Grid item md={4}>
          {props.name}
        </Grid>
        <Grid item md={4}>
          {props.desc}
        </Grid>
      </Grid>
      <Grid item md={4}>
        <a href="#" style={{ textDecoration: 'none' }}>
          View
        </a>
      </Grid>
      {/* eslint-enable */}
    </div>
  );
}

export default Patents;
