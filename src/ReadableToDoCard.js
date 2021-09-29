import React from "react";
import "./App.css";

class ReadableToDoCard extends React.Component {
  render() {
    return (
      <>
        <div className="input-wrapper">
          <p className="task-text">{this.props.task}</p>
        </div>
        <div className="buttons-wrapper">
          <button
            className="action-btn-w-text"
            onClick={() => this.props.editTask()}
          >
            Edit
          </button>
          <button
            className="action-btn-w-text"
            onClick={() => this.props.deleteTask()}
          >
            Delete
          </button>
        </div>
      </>
    );
  }
}

export default ReadableToDoCard;
