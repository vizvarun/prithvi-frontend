import React from 'react';
import './proposals-card.css';
import MaterialTable from 'material-table';
/*eslint-disable */

export default function DetailedProposalUserStoryTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'I want to achieve', field: 'achieve' },
      { title: 'So that I can', field: 'for' },
      { title: 'Complexity', field: 'complexity' },
    ],
    data: [],
  });
  /* eslint-enable */

  return (
    <MaterialTable
      title="User Story"
      columns={state.columns}
      data={state.data}
      style={{
        padding: '30px',
      }}
      options={{
        actionsColumnIndex: -1,
      }}
      actions={[
        {
          hidden: true,
          isFreeAction: true,
        },
      ]}
    />
  );
}
