import React from "react";
import nanoid from "nanoid";

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
    const { name, position, contract } = this.state;

    let people = {
      name: name,
      position: position,
      contract: contract,
      id: nanoid()
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
    const { name, position, contract } = this.state;

    return (
      <form>
        <label>
          Name:
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Position:
          <select name="position" value={position} onChange={this.handleChange}>
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
            value={contract}
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
