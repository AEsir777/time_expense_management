import './App.css';
import React from 'react';
import Modal from './modal/modal';
import AddModal from './modal/addModal';
import axios, * as others from 'axios';

const newAL = {
  id: 0,
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
      logs: [],
      modal_log: newAL,
    };
  }

  getList() {
    axios.get("api/").then((results) => {
      this.setState({ logs: results.data })
    }).catch((err) => { console.log(err) });
  }

  componentDidMount() {
    this.getList();
  }

  clickLog(log) {
    this.setState({ modal_log: log });
    return;
  }

  clickComplete(id) {
    console.log("clicked" + id);
    let list = this.state.logs.slice();
    list.forEach((item) => {
      if (item.id === id) {
        item.is_compeleted = !item.is_compeleted;
        this.save(item);
        return;
      } 
    });

  }

  delete(id) {
    axios.delete(`api/${id}/`).then(() => {
      this.getList();
    });
    /* console.log("delete log " + id);
    const list = this.state.logs.filter((item) => item.pk !== pk);
    this.setState({
      logs: list,
    }); */
  }

  save(newLog) {
    const log = {
      activity: newLog.activity,
      description: newLog.description,
      is_compeleted: newLog.is_compeleted,
      due_time: newLog.due_time,
      priority: newLog.priority,
    };
    if ( newLog.id ) {
      axios.put(`api/${newLog.id}/`, log).then(() => {
        this.getList();
      });
      return;
    }
    axios
      .post("api/new/", log)
      .then(() => {
        this.getList();
      });
/*     let list = this.state.logs.slice();
    if ( add ) {
      list.push(newLog);
    } else {
      list.forEach((item, index) => {
        if (item.id === newLog.id) {
          list[index] = newLog;
          return;
        }
      });
    }
 
    this.setState({
      logs: list,
    }); */
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
          key={log.id}
        >
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            defaultChecked={is_compeleted}
            onChange={() => this.clickComplete(log.id)}
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
            onDelete={(id) => this.delete(id)}
            onSave={(log) => this.save(log)}
            onChange={(event) => this.handleChange(event)}
          />
          <AddModal
            log={modal_log}
            onSave={(log) => this.save(log)}
            onChange={(event) => this.handleChange(event)}
          />
        </div>
      </div>
    );
  }
}

export default List;
