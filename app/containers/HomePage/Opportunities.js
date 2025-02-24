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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Card from '@material-ui/core/Card';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardContent from '@material-ui/core/CardContent';
import InNetworkProblems from '../../components/InNetworkProblems';
import PublicProblems from '../../components/PublicProblems';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  card: {
    textAlign: 'center',
    borderRadius: 15,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
    border: '1px solid rgba(0,0,0,0.15)',
    alignItems: 'center',
    maxHeight: 'fit-content',
  },
});

export default function Opportunities() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

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
          <h3 style={{ paddingLeft: '20px' }}>Opportunities</h3>
        </div>
        <div>
          <Card className={classes.card}>
            <Link
              to="/createProblem"
              style={{ textDecoration: 'none', color: 'black' }}
            >
              <CardContent
                style={{
                  display: 'flex',
                  cursor: 'pointer',
                  alignItems: 'center',
                  marginTop: '5px',
                }}
              >
                <AddCircleIcon
                  color="primary"
                  fontSize="50"
                  style={{ marginRight: '15px' }}
                />
                <Typography>Add New Problem</Typography>
              </CardContent>
            </Link>
          </Card>
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
          aria-label="simple tabs example"
          style={{ color: '#121212' }}
        >
          <Tab label="Public" {...a11yProps(0)} />
          <Tab label="In Network" {...a11yProps(1)} />
          <Tab label="Saved" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PublicProblems />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InNetworkProblems />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h5>SAVED</h5>
      </TabPanel>
    </div>
  );
}
