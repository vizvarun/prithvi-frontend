import React from 'react';
import { Link } from 'react-router-dom';
import './opportunities-card.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Divider from '@material-ui/core/Divider';
import SwitchLabels from './Switch';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
    border: '1px solid rgba(0,0,0,0.15)',
    marginBottom: 20,
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

const problemCardData = [
  {
    id: 0,
    tags: ['Data', 'Project'],
    problemCount: 'A',
    postedBy: 'Prithvi.ai',
    desc: 'lorem ipsum dolor sit lorem ipsum dolor sit',
  },
  {
    id: 1,
    tags: ['Data'],
    problemCount: 'B',
    postedBy: 'Algo8.ai',
    desc: 'lorem ipsum dolor sit lorem ipsum dolor sit',
  },
  {
    id: 2,
    tags: ['Data', 'Project', 'Development'],
    problemCount: 'C',
    postedBy: 'Prithvi.ai',
    desc: 'lorem ipsum dolor sit lorem ipsum dolor sit',
  },
];

export default function PublicProblemsCard() {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(0);

  return (
    <>
      {problemCardData.map(data => (
        <Card className={classes.root} key={data.id}>
          <CardContent>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <h5>Tags</h5>
                {data.tags.map(tag => (
                  <Chip
                    style={{
                      marginLeft: '20px',
                      borderRadius: '5px',
                    }}
                    label={tag}
                  />
                ))}
              </div>
              <div>
                {selected ? (
                  <BookmarkIcon
                    key={data.id}
                    style={{ marginRight: '50px', cursor: 'pointer' }}
                    onClick={() => setSelected(!selected)}
                  />
                ) : (
                  <BookmarkBorderIcon
                    key={data.id}
                    style={{ marginRight: '50px', cursor: 'pointer' }}
                    onClick={() => setSelected(!selected)}
                  />
                )}
              </div>
            </div>
            <Divider />
            <h5
              style={{
                color: 'blue',
                fontSize: '1rem',
                fontWeight: '500',
                lineHeight: '75%',
                marginBottom: '10px',
              }}
            >
              Problem {data.problemCount}
            </h5>
            <div style={{ display: 'flex' }}>
              <h5>Posted by - </h5>
              <h5 style={{ color: 'blue' }}>&nbsp; {data.postedBy}</h5>
            </div>
            <h5 style={{ marginTop: '0', fontWeight: '400', color: 'gray' }}>
              {data.desc}
            </h5>
            <div className="button-row">
              <Link to="/detailedProposal">
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    textTransform: 'none',
                    marginRight: '50px',
                  }}
                >
                  Respond
                </Button>
              </Link>
              <SwitchLabels />
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
