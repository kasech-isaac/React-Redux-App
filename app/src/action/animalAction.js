// action creatar
// action must always have a type is the instruction to the reducer. tells redycer what to do!!
import axios from "axios";

export  const setEditTrue = () =>{
return {type:"EDITING"}
}


export const setEditFalse = () => {
    return dispatch => {
    
      setTimeout(() => {
        dispatch({ type: "DONE_EDITING" });
      }, 500);
    };
  };


  export const animal = () => {
    return dispatch => {
      dispatch({ type: "LOADING" });
      axios
        .get("https://dog.ceo/api/breeds/image/random")
        .then(res => {
          dispatch({ type: "NEW_ANIMAL", payload: res.data.message });
        })
        .catch(err => console.log("ERROR:", err));
    };
  };