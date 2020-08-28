import React from "react";
import { connect } from "react-redux";
import { animal } from "../action/animalAction";



function AnimalPic(props) {
  return (
    <div>
      {props.loading ? (
        <h1>Loading</h1>
      ) : (
        <img style={{ maxWidth: "300px" }} src={props.dog} alt="dog"/>
      )}
      <button className="randomdog"
        onClick={() => { props.animal(); }} > Get Random Dogs!
      </button>
    </div>
  );
}

export default connect(
  state => {
    return {dog: state.dog };
  },
  { animal }
)(AnimalPic);
