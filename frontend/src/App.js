import './App.css';
import React from 'react';
import Modal from './modal/modal';
import AddModal from './modal/addModal';

// test fiels
const ALList = [
  {
    pk: 1,
    activity: "Do the cleaning",
    description: "Clean the living room and bed room",
    is_compeleted: true,
    due_time: '2022 October 11 19:00',
    priority: 'list-group-item-light',
  },
  {
    pk: 2,
    activity: "Study CS 1023",
    description: "Prepare for the mid term",
    is_compeleted: false,
    due_time: '2022 October 23 12:00',
    priority: 'list-group-item-danger',
  },
  {
    pk: 3,
    activity: "Study MATH 4233",
    description: "Finish first chapter and do the after chapter problems",
    is_compeleted: false,
    due_time: '2022 October 24 14:00',
    priority: 'list-group-item-warning',
  },
  {
    pk: 4,
    activity: "Finish ARTS 342 Assignment 4",
    description: "",
    is_compeleted: false,
    due_time: '2022 October 29 19:00',
    priority: 'list-group-item-danger',
  },
];

const newAL = {
  pk: 0,
  activity: "",
  description: "",
  is_compeleted: false,
  due_time: "",
  priority: "list-group-item-danger",
};

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: ALList,
      modal_log: newAL,
    };
  }

  clickLog(log) {
    this.setState({ modal_log: log });
    return;
  }

  clickComplete(pk) {
    console.log("clicked");
    const list = this.state.logs.slice();
    list.forEach((item) => {
      if (item.pk === pk) item.is_compeleted = !item.is_compeleted;
    });

    this.setState({
      logs: list,
    });
  }

  delete(pk) {
    console.log("delete log " + pk);
    const list = this.state.logs.filter((item) => item.pk !== pk);
    this.setState({
      logs: list,
    });
  }

  save(newLog, add=false) {
    let list = this.state.logs.slice();
    if ( add ) {
      list.push(newLog);
    } else {
      list.forEach((item, index) => {
        if (item.pk === newLog.pk) {
          list[index] = newLog;
          return;
        }
      });
    }
 
    this.setState({
      logs: list,
    });
  }

  handleChange(event) {
    const log = {
      ...this.state.modal_log,
      [event.target.name]: event.target.value,
    };

    this.setState({ modal_log: log });
  }

  renderLogs(is_compeleted) {
    const completed = this.state.logs.filter(
      (log) => log.is_compeleted === is_compeleted
    );

    return completed.map((log) => {
      return (
        <li
          class={`list-group-item d-flex justify-content-between align-item-start list-group-item-action ${log.priority}`}
          key={log.pk}
        >
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            defaultChecked={is_compeleted}
            onChange={() => this.clickComplete(log.pk)}
          ></input>
          <div
            class="ms-2 me-auto"
            onClick={() => this.clickLog(log)}
            data-bs-toggle="modal"
            data-bs-target="#edit_panel"
          >
            <div class="fw-bold">{log.activity}</div>
          </div>
        </li>
      );
    });
  }

  render() {
    const modal_log = this.state.modal_log;
    return (
      <div>
        <div class="container-fluid">
          <div class="row">
            <h2 class="my-4"> Activity Logs </h2>
            <div class="col-md-7 col-sm-10 p-0">
              <ul class="list-group ml-4">{this.renderLogs(false)}</ul>
              <button
                class="btn btn-primary"
                data-bs-toggle="modal"
                onClick={() => this.clickLog(newAL)}
                data-bs-target="#add_panel"
              >
                Create
              </button>
            </div>
            <div class="col-md-4 col-sm-6 mx-auto p-0">
              <h3>completed </h3>
              <ul class="list-group">{this.renderLogs(true)}</ul>
            </div>
          </div>
        </div>

        <div>
          <Modal
            log={modal_log}
            onDelete={(pk) => this.delete(pk)}
            onSave={(log) => this.save(log)}
            onChange={(event) => this.handleChange(event)}
          />
          <AddModal
            log={modal_log}
            onSave={(log) => this.save(log, true)}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }
}

export default List;
