import React from "react";
import AddTableRow from "./AddTableRow";

function Table(props) {
  const people = props.people;
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Position</th>
          <th>Contractor</th>
          <th>Del</th>
        </tr>
      </thead>
      <tbody>
        {people.map((el, i) => {
          return <AddTableRow key={i} options={el} del={props.del} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
