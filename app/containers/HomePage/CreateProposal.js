import React from 'react';
import { Link } from 'react-router-dom';
import './proposals.css';
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ProposalProblemCard from '../../components/ProposalProblemCard';
import ProposalEpicsCard from '../../components/ProposalEpicsCard';
import ProposalResourceCard from '../../components/ProposalResourceCard';
import AdditionalCommentCard from '../../components/ProposalAdditionalCommentCard';

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
          <h3 style={{ paddingLeft: '20px' }}>Create Proposal</h3>
        </div>
      </div>
      <div className="problem-card">
        <ProposalProblemCard />
      </div>
      <div className="problem-card">
        <ProposalEpicsCard />
      </div>
      <div className="problem-card">
        <ProposalResourceCard />
      </div>
      <div className="problem-card">
        <AdditionalCommentCard />
      </div>
    </div>
  );
}
