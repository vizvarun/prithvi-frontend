import React from 'react';
import './proposals-card.css';
import MaterialTable from 'material-table';
/* eslint-disable */

export default function DetailedProposalResourceCard() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Resource', field: 'resource' },
      { title: 'Quantity', field: 'quantity' },
    ],
    data: [
      { resource: 'Research Unit', quantity: 12 },
      { resource: 'Developers Unit', quantity: 20 },
      { resource: 'Compute Power', quantity: 8 },
    ],
  });
  /* eslint-enable */

  return (
    <MaterialTable
      title="Resource Requirement"
      columns={state.columns}
      data={state.data}
      style={{
        padding: '30px',
        borderRadius: 15,
        boxShadow: '0px 1px 1px 1px rgba(0,0,0,.1)',
        border: '1px solid rgba(0,0,0,0.15)',
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
