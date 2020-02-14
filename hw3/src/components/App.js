import React from "react";
import Form from "./Form";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
    this.pusherInfo = this.pusherInfo.bind(this);
  }

  pusherInfo(info) {
    let people = [...this.state.people];
    people.push(info);
    this.setState({ people: people });
  }

  render() {
    return (
      <div>
        <Form info={this.pusherInfo} />
        <Table people={this.state.people} />
      </div>
    );
  }
}

export default App;
