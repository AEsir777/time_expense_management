import React from "react";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      log: this.props.log,
    };
  }

  render() {
    return (
      <div
        class="modal fade" tabIndex="-1"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Activity Log
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  {/* activity  */}
                  <label class="form-label">Activity</label>
                  <input
                    type="text"
                    class="form-control"
                    value={this.state.log.activity}
                    onChange={() => {console.log('field modified');}}
                    placeholder="Please enter the activity"
                  />
                </div>
                <div class="mb-3">
                  {/* description  */}
                  <label class="form-label">Description</label>
                  <input
                    class="form-control"
                    value={this.state.log.description}
                    onChange={() => {console.log('field modified');}}
                    placeholder="Please enter the description"
                  ></input>
                </div>
                <div class="mb-3">
                  {/* due time  */}
                  <label class="form-label">Due time</label>
                  <input
                    class="form-control"
                    value={this.state.log.due_time}
                    onChange={() => {console.log('field modified');}}
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
                onClick={() => {console.log('delete is clicked');}}
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
                onClick={() => {console.log('save is clicked');}}
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
