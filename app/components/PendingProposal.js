import React from 'react';
import './project-card.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles({
  root: {
    minWidth: '30vw',
    borderRadius: '10px',
    boxShadow: '0 2px 4px 0 rgba(0,0,0,.1)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const item = [
  {
    id: 0,
    proposerCount: 'A',
    problemCount: '1',
    status: 'Pending',
  },
  {
    id: 1,
    problemCount: 'B',
    proposerCount: '2',
    status: 'Pending',
  },
  {
    id: 2,
    proposerCount: 'C',
    problemCount: '3',
    status: 'Pending',
  },
];

export default function PendingProposalCard() {
  const classes = useStyles();
  return (
    <>
      {item.map(data => (
        <Card
          className={classes.root}
          variant="outlined"
          style={{ marginBottom: '20px' }}
        >
          <CardContent>
            <div className="project-header-row">
              <div>
                <h5>Proposer {data.proposerCount}</h5>
                <h5>Problem Associated: Problem {data.problemCount}</h5>
              </div>
              <div className="status-chip">
                <p>Status</p>
                <Chip
                  size="small"
                  label={data.status}
                  style={{ backgroundColor: 'teal', color: 'white' }}
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
