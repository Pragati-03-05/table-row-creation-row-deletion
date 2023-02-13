import React from 'react';

const Table = (props) => {
  return (
    <div>
      <table>
        <tr id="head">
          <th>ID</th>
          <th>Name</th>
        </tr>
        {props.data.map((x) => {
          return (
            <tr id="body">
              <td>{x.id}</td>
              <td>{x.first_name}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
export default Table;
