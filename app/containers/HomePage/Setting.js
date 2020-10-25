import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './proposals.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { CardContent, Card } from '@material-ui/core';
import Patents from './utils/Patents';
import PersonalInformation from './utils/PersonalInformation';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    outline: 'none',
  },
  card: {
    minHeight: '50vh',
    display: 'flex',
    marginTop: '20px',
    minWidth: 275,
    borderRadius: 15,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
    border: '1px solid rgba(0,0,0,0.15)',
  },
}));

const pi = [
  {
    title: 'Name',
    value: 'Ashutosh',
  },
  {
    title: 'Password',
    value: '**********',
  },

  {
    title: 'Email',
    value: 'ashutosh.kumar@prithvi.ai',
  },
  {
    title: 'Mobile Number',
    value: '+91 8130264810',
  },
];

const pat = [
  {
    name: 'Patent 1',
    desc: 'Description',
  },
  {
    name: 'Patent 2',
    desc: 'Description',
  },
  {
    name: 'Patent 3',
    desc: 'Description',
  },
  {
    name: 'Patent 4',
    desc: 'Description',
  },
];

function Setting() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // const [count, setCount] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className="proposals-head">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/home">
            <ArrowBackIcon style={{ width: '18px', height: '18px' }} />
          </Link>
          <h3 style={{ paddingLeft: '20px' }}>Settings</h3>
        </div>
      </div>
      <AppBar
        position="static"
        style={{
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)',
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="scrollable auto tabs example"
          style={{ color: '#121212' }}
        >
          <Tab label="Personal Information" {...a11yProps(0)} />
          <Tab label="Patents" {...a11yProps(1)} />
          <Tab label="Published Papers" {...a11yProps(2)} />
          <Tab label="Documents" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Grid container spacing={3}>
          <Grid item md={8} sm={12}>
            {pi.map(d => (
              <PersonalInformation title={d.title} value={d.value} />
            ))}
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography style={{ marginTop: '10px', marginLeft: '10px' }}>
                  Documents
                  <AddCircleIcon
                    color="primary"
                    size="small"
                    style={{ cursor: 'pointer', marginLeft: '25px' }}
                  />
                </Typography>
              </CardContent>
            </Card>
            <div style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '40px', width: '50%' }}
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Item Two */}

        <Grid container spacing={3}>
          <Grid item md={8} sm={12}>
            {pat.map(d => (
              <Patents name={d.name} desc={d.desc} />
            ))}
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.card}>
              <CardContent>
                <Typography style={{ marginTop: '10px', marginLeft: '10px' }}>
                  Add a new Patent
                  <AddCircleIcon
                    color="primary"
                    size="small"
                    style={{ cursor: 'pointer', marginLeft: '25px' }}
                  />
                </Typography>
              </CardContent>
            </Card>
            <div style={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '40px', width: '50%' }}
              >
                Save
              </Button>
            </div>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}

export default Setting;
