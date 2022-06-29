import React from "react";
import classes from "./completion.module.css";
const Completion = ({ name, closeModal, markItComplete, isCompleted }) => {
  return (
    <div id="myModal" className={classes.modal}>
      <div className={classes.modalContent}>
        <div className={classes.modalHeader}>
          <span className={classes.close} onClick={closeModal}>
            &times;
          </span>
          <h2>Mark it complete</h2>
        </div>
        <div className={classes.modalBody}>
          <p style={{ marginTop: "10px" }}>
            Do you want to mark this lesson "{name}" complete?
          </p>
          {isCompleted ? (
            <button
              type="button"
              class="btn btn-success"
              style={{ marginBottom: "20px" }}
              onClick={closeModal}
            >
              Success
            </button>
          ) : (
            <div
              className="btn btn-primary"
              style={{ marginBottom: "20px" }}
              onClick={markItComplete}
            >
              Complete
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Completion;
