import React from "react";

function AddTableRow(props) {
  return (
    <tr>
      <td>{props.options.name === "" ? "No name" : props.options.name}</td>
      <td>{props.options.position}</td>
      <td>{props.options.contract ? "Yes" : "No"}</td>
      <td onClick={props.del}>
        <span data-id={props.options.id}>X</span>
      </td>
    </tr>
  );
}

export default AddTableRow;
