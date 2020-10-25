import Landing from './containers/HomePage/Landing';
import Opportunities from './containers/HomePage/Opportunities';
import Proposals from './containers/HomePage/Proposals';
import CreateProposal from './containers/HomePage/CreateProposal';
import Project from './containers/HomePage/Project';
import Setting from './containers/HomePage/Setting';
import CreateProject from './containers/HomePage/CreateProject';
import CreateProblem from './containers/HomePage/CreateProblem';
import DetailedProposal from './containers/HomePage/DetailedProposal';

const routes = [
  {
    path: '/home',
    name: 'Section 1',
    component: Landing,
    id: 'sec1',
  },
  {
    path: '/opportunities',
    name: 'Section 2',
    component: Opportunities,
    id: 'sec2',
  },
  {
    path: '/proposals',
    name: ' Section 3',
    component: Proposals,
    id: 'sec3',
  },
  {
    path: '/createProposal',
    name: ' Section 4',
    component: CreateProposal,
    id: 'sec4',
  },
  {
    path: '/project',
    name: 'Section 5',
    component: Project,
    id: 'sec5',
  },
  {
    path: '/settings',
    name: 'Section 6',
    component: Setting,
    id: 'sec6',
  },
  {
    path: '/createProject',
    name: 'Section 7',
    component: CreateProject,
    id: 'sec7',
  },
  {
    path: '/createProblem',
    name: 'Section 8',
    component: CreateProblem,
    id: 'sec8',
  },
  {
    path: '/detailedProposal',
    name: 'Section 9',
    component: DetailedProposal,
    id: 'sec9',
  },
];
export default routes;
