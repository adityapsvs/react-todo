import React from "react";
import "./App.css";

class NewToDoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: "",
    };
  }
  handleNewTask = (event) => {
    this.setState({ newTask: event.target.value });
  };
  addNewTask = () => {
    const newTask = this.state.newTask;
    this.setState({ newTask: "" });
    this.props.addNewTask(newTask);
  };
  render() {
    return (
      <>
        <input
          type="text"
          className="task-input"
          value={this.state.newTask}
          onChange={(event) => this.handleNewTask(event)}
        />
        <button className="action-btn-w-text" onClick={() => this.addNewTask()}>
          Add a to do
        </button>
      </>
    );
  }
}

export default NewToDoCard;
