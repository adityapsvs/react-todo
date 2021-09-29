import React from "react";
import "./App.css";
import EditableToDoCard from "./EditableToDoCard";
import NewToDoCard from "./NewToDoCard";
import ReadableToDoCard from "./ReadableToDoCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      editingTaskIndex: null,
    };
  }

  mapItems = () => {
    return this.state.todoList.map((eachTodo) => {
      return (
        <div className="todo-wrapper">
          <p>{eachTodo.task}</p>
        </div>
      );
    });
  };

  addToTaskList(newTask) {
    const todoList = this.state.todoList;
    todoList.push({
      task: newTask,
    });
    this.setState({ todoList: todoList });
  }

  changeEditTaskIndex = (index) => {
    this.setState({ editingTaskIndex: index });
  };

  submitEditedTask = (updatedTask, index) => {
    const todoList = this.state.todoList;
    todoList[index].task = updatedTask;
    this.setState({ todoList: todoList, editingTaskIndex: null });
  };

  cancelTaskEdit = () => {
    this.setState({ editingTaskIndex: null });
  };

  deleteTask = (index) => {
    const todoList = this.state.todoList;
    delete todoList[index];
    this.setState({ todoList: todoList });
  };

  renderReadableToDoCard(task, index) {
    return (
      <ReadableToDoCard
        task={task}
        editTask={() => this.changeEditTaskIndex(index)}
        deleteTask={() => this.deleteTask(index)}
      />
    );
  }

  renderEditableToDoCard(taskEditText, index) {
    return (
      <EditableToDoCard
        index={index}
        taskEditText={taskEditText}
        updateTask={(updatedTask, index) =>
          this.submitEditedTask(updatedTask, index)
        }
        cancelEdit={() => this.cancelTaskEdit()}
      />
    );
  }

  renderNewToDoCard() {
    return (
      <NewToDoCard addNewTask={(newTask) => this.addToTaskList(newTask)} />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="main-action-items">{this.renderNewToDoCard()}</div>
        <div className="todo-area">
          {this.state.todoList.map((eachTodo, index) => {
            return (
              <div className="todo-wrapper" key={index}>
                {index === this.state.editingTaskIndex
                  ? this.renderEditableToDoCard(
                      this.state.todoList[this.state.editingTaskIndex].task,
                      index
                    )
                  : this.renderReadableToDoCard(eachTodo.task, index)}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
