import React from "react";
import "./App.css";

class EditableToDoCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingTask: this.props.taskEditText,
    };
  }
  handleEdit(event) {
    this.setState({ editingTask: event.target.value });
  }
  cancelEdit() {
    this.setState({ editingTask: this.props.taskEditText });
    this.props.cancelEdit();
  }
  render() {
    return (
      <>
        <div className="input-wrapper">
          <input
            type="text"
            className="task-input"
            value={this.state.editingTask}
            onChange={(event) => this.handleEdit(event)}
          />
        </div>
        <div className="buttons-wrapper">
          <button
            className="action-btn-w-text"
            onClick={() =>
              this.props.updateTask(this.state.editingTask, this.props.index)
            }
          >
            Submit
          </button>
          <button
            className="action-btn-w-text"
            onClick={() => this.cancelEdit()}
          >
            Cancel
          </button>
        </div>
      </>
    );
  }
}

export default EditableToDoCard;
