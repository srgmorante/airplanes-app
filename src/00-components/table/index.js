import React from 'react';

export default ({ columns = [], dataSource = [], className }) => {
  const tableHeaders = (
    <thead>
        <tr>
          {columns.map((column, index) => (<th key={index}>{column}</th>))}      
        </tr>
    </thead>
  );

  const tableBody = dataSource.map((row, index) => {
    return (
      <tr key={index}>
        {columns.map((column, index) => {
          return <td key={index}>{row[column]}</td>; })}
      </tr>); }
    );
   
  return (
    <table
      className={className}
    >
      {tableHeaders}
      <tbody>
      {tableBody}
      </tbody>
    </table>
  ) ;
}