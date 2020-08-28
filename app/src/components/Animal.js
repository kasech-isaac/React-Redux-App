import React, { useState } from "react";

import { connect } from "react-redux";

import { setEditTrue, setEditFalse } from "../action/animalAction"



function Animal(props) {
  const [newTitleText, setNewTitleText] = useState("");

  const handleChanges = e => {
    setNewTitleText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTitleText("")
  }

  return (
    <div>
      {!props.editing ? (
        <h1 onClick={() => {props.setEditTrue(); }} >{props.animal} </h1>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button onClick={() => {props.setEditFalse();}} > Update Animal </button>
          </form>
        </div>
      )}
      {props.loading ? <h1>loading</h1> : null}
    </div>
  );
}

const mapStateToProps = state => {
  return { animal: state.animal, editing: state.editing, loading: state.loading };
};

export default connect(
  mapStateToProps,
  { setEditTrue, setEditFalse }
)(Animal);
