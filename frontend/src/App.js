import './App.css';
import React from 'react';

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

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logs: ALList,
    };
  }

  clickComplete(pk) {
    console.log('clicked');
    const list = this.state.logs.slice();
    list.forEach((item) => {
      if (item.pk === pk)
        item.is_compeleted = ! item.is_compeleted;
    });

    this.setState({
      logs: list,
    });
  }

  renderLogs(is_compeleted) {
    const completed = this.state.logs.filter((log) =>
      log.is_compeleted === is_compeleted,
    );

    return completed.map((log) => {
      return (
        <li
          class={`list-group-item d-flex justify-content-between align-item-start list-group-item-action ${log.priority}`}
        >
          <input
            class="form-check-input me-1"
            type="checkbox"
            value=""
            defaultChecked={is_compeleted}
            onChange={() => this.clickComplete(log.pk)}
          ></input>
          <div class="ms-2 me-auto">
            <div class="fw-bold">{log.activity}</div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <body>
        <div class="container-fluid">
          <div class="row">
          <h2 class="my-4"> Activity Logs </h2>
            <div class="col-md-7 col-sm-10 p-0">
              <ul class="list-group ml-4">{this.renderLogs(false)}</ul>
            </div>
            <div class="col-md-4 col-sm-6 mx-auto p-0">
              <h3>completed </h3>
              <ul class="list-group">{this.renderLogs(true)}</ul>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

export default List;
