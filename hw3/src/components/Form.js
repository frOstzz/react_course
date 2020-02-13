import React from "react";

class Form extends React.Component {
  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={this.props.name}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <label>
          Position:
          <select
            name="position"
            value={this.props.position}
            onChange={this.props.handleChange}
          >
            <option value="junior">Junior</option>
            <option value="middle">Middle</option>
            <option value="sinior">Sinior</option>
          </select>
        </label>
        <br />
        <label>
          Contract:
          <input
            type="checkbox"
            name="contract"
            value={this.props.contract}
            onChange={this.props.handleChange}
          />
        </label>
        <br />
        <input type="button" value="Add" onClick={this.props.addButton} />
      </form>
    );
  }
}

export default Form;
