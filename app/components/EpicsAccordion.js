import React from 'react';
import './proposals-card.css';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import UserStoryTable from './UserStoryTable';

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: '100%',
    borderRadius: '15px',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
    fontWeight: '500',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: '400',
  },
  accordion: {
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
    border: '1px solid rgba(0,0,0,0.1)',
  },
}));

const epics = [
  {
    id: 0,
    count: 'Epic 1',
    title: 'Add abc to project',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 1,
    count: 'Epic 2',
    title: 'Add xyz to project',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 2,
    count: 'Epic 3',
    title: 'Add uvw to project',
    desc:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

export default function EpicsAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* eslint-disable */}

      {epics.map(epic => (
        <Accordion
          className="fab-center"
          key={epic.id}
          className={classes.accordion}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>{epic.count}</Typography>
            <Typography className={classes.secondaryHeading}>
              {epic.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{epic.desc}</Typography>
          </AccordionDetails>
          <UserStoryTable />
        </Accordion>
      ))}
      {/* eslint-enable */}
    </div>
  );
}
