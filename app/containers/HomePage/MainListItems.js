import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Divider from '@material-ui/core/Divider';
import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import StorageIcon from '@material-ui/icons/Storage';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountTreeIcon from '@material-ui/icons/AccountTree';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';

// export const mainListItems = (
export default function MainListItems() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <List>
        {/* <ListItem button>
      <ListItemIcon>
        <DashboardIcon style={{ color: 'white' }} />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
      <Divider /> */}
        {/* from */}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <DashboardIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
              <ListItem button>
                <ListItemIcon>
                  {/* <StarBorder style={{ color: 'white' }}/> */}
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItem>
            </Link>
            <Link
              to="/project"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              {' '}
              <ListItem button>
                <ListItemIcon>
                  {/* <StarBorder style={{ color: 'white' }}/> */}
                </ListItemIcon>
                <ListItemText primary="Projects" />
              </ListItem>
            </Link>
            <Link
              to="/opportunities"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <ListItem button>
                <ListItemIcon>
                  {/* <StarBorder style={{ color: 'white' }}/> */}
                </ListItemIcon>
                <ListItemText primary="Opportunities" />
              </ListItem>
            </Link>
            <Link
              to="/proposals"
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <ListItem button>
                <ListItemIcon>
                  {/* <StarBorder style={{ color: 'white' }} /> */}
                </ListItemIcon>
                <ListItemText primary="Proposals" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        {/* here */}
        <Divider />
        <a
          href="http://taiga.prithvi.ai/"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <ListItem button>
            <ListItemIcon>
              <AccountTreeIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Taiga" />
          </ListItem>
        </a>
        <Divider />
        <a
          href="http://git.prithvi.ai/"
          target="_blank"
          style={{ textDecoration: 'none', color: 'white' }}
        >
          <ListItem button>
            <ListItemIcon>
              <GitHubIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Git" />
          </ListItem>
        </a>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <CodeIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Coding Env" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemIcon>
            <StorageIcon style={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Dataset" />
        </ListItem>
        <Link to="/settings" style={{ textDecoration: 'none', color: 'white' }}>
          <ListItem button>
            <ListItemIcon>
              <SettingsIcon style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </Link>
      </List>
    </div>
  );
}
