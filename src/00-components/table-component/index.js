import React from 'react';

export default ({dataColumns, dataRows, className}) => {
  const tableHeaders = (
    <thead>
        <tr>
          {dataColumns.map((column, index) => (<th key={index}>{column}</th>))}      
        </tr>
    </thead>
  );

  const tableBody = dataRows.map((row, index) => {
    return (
      <tr key={index}>
        {dataColumns.map((column, index) => {
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