import React from "react";
import Form from "./Form";
import Table from "./Table";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { people: [] };
    this.pusherInfo = this.pusherInfo.bind(this);
    this.deleteWorker = this.deleteWorker.bind(this);
  }

  pusherInfo(info) {
    let people = [...this.state.people];
    people.push(info);
    this.setState({ people: people });
  }

  deleteWorker(e) {
    let worker = [...this.state.people];
    const target = e.target;
    const id = target.getAttribute("data-id");

    worker.splice(
      worker.indexOf(
        worker.find(worker => {
          return worker.id === id;
        })
      ),
      1
    );
    this.setState({
      people: worker
    });
  }

  render() {
    return (
      <div>
        <Form info={this.pusherInfo} />
        <Table people={this.state.people} del={this.deleteWorker} />
      </div>
    );
  }
}

export default App;
