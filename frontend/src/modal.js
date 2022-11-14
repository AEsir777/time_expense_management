import React from "react";
import * as bootstrap from 'bootstrap';
window.Modal = bootstrap.Modal;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pk: this.props.pk,
      activity: this.props.activity,
      due_time: this.props.due_time,
      priority: this.props.priority,
    };
  } 

  handleChange(event) {
    console.log(event.target.value);
    console.log(event.target.name);
    switch(event.target.name) {
      case "activity":
        this.setState({ activity: event.target.value }); 
        break;
      case "description":
        this.setState({ description: event.target.value }); 
        break;
      case "due_time":
        this.setState({ due_time: event.target.value }); 
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div class="modal fade" tabIndex="-1" id="edit_panel">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5">Activity Log</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3 form-group">
                  {/* activity  */}
                  <label class="form-label">Activity</label>
                  <input
                    type="text"
                    name="activity"
                    class="form-control"
                    value={this.props.activity}
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                    placeholder="Please enter the activity"
                  />
                </div>
                <div class="mb-3 form-group">
                  {/* description  */}
                  <label class="form-label">Description</label>
                  <input
                    class="form-control"
                    name="description"
                    value={this.props.description}
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                    placeholder="Please enter the description"
                  ></input>
                </div>
                <div class="mb-3 form-group">
                  {/* due time  */}
                  <label class="form-label">Due time</label>
                  <input
                    class="form-control"
                    name="due_time"
                    value={this.props.due_time}
                    onChange={(e) => {
                      this.handleChange(e);
                    }}
                    placeholder="2022 January 01 00:00"
                  ></input>
                </div>

                {/*                 <div class="mb-3">
                    priority 
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                  >
                    <option selected>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div> */}
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  this.props.onDelete(this.props.pk);
                }}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  this.props.onSave(
                    this.state.pk,
                    this.state.description,
                    this.state.due_time,
                    this.state.priority
                  );
                }}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal
