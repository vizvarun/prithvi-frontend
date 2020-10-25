import React from 'react';
import { Link } from 'react-router-dom';
import './proposals.css';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DetailedProposalProblemCard from '../../components/DetailedProposalProblemCard';
import DetailedProposalEpicsCard from '../../components/DetailedProposalEpicsCard';
import DetailedProposalResourceCard from '../../components/DetailedProposalResourceCard';
import DetailedAdditionalCommentCard from '../../components/DetailedProposalAdditionalCommentCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
});

export default function CreateProposal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="proposals-head">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/section3">
            <ArrowBackIcon style={{ width: '18px', height: '18px' }} />
          </Link>
          <h3 style={{ paddingLeft: '20px' }}>Proposal</h3>
        </div>
      </div>
      <div className="problem-card">
        <DetailedProposalProblemCard />
      </div>
      <div className="problem-card">
        <DetailedProposalEpicsCard />
      </div>
      <div className="problem-card">
        <DetailedProposalResourceCard />
      </div>
      <div className="problem-card">
        <DetailedAdditionalCommentCard />
      </div>
    </div>
  );
}
