import React from 'react';
import './project-card.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
    problemCount: '1',
    desc: 'lorem ipsum dolor sit',
  },
  {
    id: 1,
    problemCount: '2',
    desc: 'lorem ipsum dolor sit',
  },
  {
    id: 2,
    problemCount: '3',
    desc: 'lorem ipsum dolor sit',
  },
];

export default function OpportunitiesCard() {
  const classes = useStyles();
  return (
    <>
      {item.map(data => (
        <Card
          className={classes.root}
          variant="outlined"
          key={data.id}
          style={{ marginBottom: '20px' }}
        >
          <CardContent>
            <div className="project-header-col" style={{ lineHeight: '50%' }}>
              <h5>Problem {data.problemCount}</h5>
              <h5>Description : {data.desc}</h5>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
