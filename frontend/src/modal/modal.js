import React from "react";
import * as bootstrap from 'bootstrap';
window.Modal = bootstrap.Modal;

export default function Modal(props){
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
                    value={props.log.activity}
                    onChange={(e) => {
                      props.onChange(e);
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
                    value={props.log.description}
                    onChange={(e) => {
                      props.onChange(e);
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
                    value={props.log.due_time}
                    onChange={(e) => {
                      props.onChange(e);
                    }}
                    placeholder="2022 January 01 00:00"
                  ></input>
                </div>

                <div class="mb-3">
                  priority
                  <select
                    class="form-select form-select mb-3"
                    name="priority"
                    defaultValue={props.log.priority}
                    onChange={(e) => {
                      props.onChange(e);
                    }}
                  >
                    <option value="list-group-item-light">list-group-item-light</option>
                    <option value="list-group-item-warning">list-group-item-warning</option>
                    <option value="list-group-item-danger">list-group-item-danger</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-danger"
                onClick={() => {
                  props.onDelete(props.log.pk);
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
                  props.onSave(props.log);
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

