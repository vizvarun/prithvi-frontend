import React from 'react';
import './proposals-card.css';
import MaterialTable from 'material-table';

export default function UserStoryTable() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'I want to achieve', field: 'achieve' },
      { title: 'So that I can', field: 'for' },
      { title: 'Complexity', field: 'complexity' },
    ],
    data: [],
  });

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
