import React from 'react';
import './proposals-card.css';
import MaterialTable from 'material-table';

export default function ProposalResourceCard() {
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
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
