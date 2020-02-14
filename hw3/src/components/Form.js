import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", position: "junior", contract: false };
    this.handleChange = this.handleChange.bind(this);
    this.addButton = this.addButton.bind(this);
    this.positions = [
      { position: "junior" },
      { position: "middle" },
      { position: "senior" }
    ];
  }

  addButton() {
    let people = {
      name: this.state.name,
      position: this.state.position,
      contract: this.state.contract
    };

    this.props.info(people);

    this.setState({
      name: "",
      position: "junior",
      contract: false
    });
  }

  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Position:
          <select
            name="position"
            value={this.state.position}
            onChange={this.handleChange}
          >
            {this.positions.map((el, i) => {
              return (
                <option key={i} value={el.position}>
                  {el.position}
                </option>
              );
            })}
          </select>
        </label>
        <br />
        <label>
          Contract:
          <input
            type="checkbox"
            name="contract"
            value={this.state.contract}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <input type="button" value="Add" onClick={this.addButton} />
      </form>
    );
  }
}

export default Form;
