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
        </tr>
      </thead>
      <tbody>
        {people.map((el, i) => {
          return <AddTableRow key={i} options={el} />;
        })}
      </tbody>
    </table>
  );
}

export default Table;
