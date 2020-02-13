import React from "react";
import Form from "./Form";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", position: "junior", contract: false, people: [] };
    this.handleChange = this.handleChange.bind(this);
    this.addButton = this.addButton.bind(this);
  }

  addButton() {
    let people = [...this.state.people];
    people.push({
      name: this.state.name,
      position: this.state.position,
      contract: this.state.contract
    });
    this.setState({
      people
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
      <div>
        <Form
          name={this.state.name}
          position={this.state.position}
          contract={this.state.contract}
          handleChange={this.handleChange}
          addButton={this.addButton}
        />
        <Table people={this.state.people} />
      </div>
    );
  }
}

export default App;
