import React from 'react';
import './proposals.css';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import ProblemDetailsCard from '../../components/ProblemDetailsCard';
import ProblemVisibilityCard from '../../components/ProblemVisibilityCard';
import ProblemEpicsCard from '../../components/ProblemEpicsCard';
import ProblemDataCard from '../../components/ProblemDataCard';

export default function CreateProblem() {
  return (
    <div style={{ flexGrow: '1' }}>
      <div className="proposals-head">
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/opportunities">
            <ArrowBackIcon style={{ width: '18px', height: '18px' }} />
          </Link>
          <h3 style={{ paddingLeft: '20px' }}>Create Problem</h3>
        </div>
      </div>
      <div className="problem-card">
        <ProblemDetailsCard />
      </div>
      <div className="problem-card">
        <ProblemVisibilityCard />
      </div>
      <div className="problem-card">
        <ProblemEpicsCard />
      </div>
      <div className="problem-card">
        <ProblemDataCard />
      </div>
      <div
        style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}
      >
        <Button variant="contained" color="primary">
          Create Problem
        </Button>
      </div>
    </div>
  );
}
