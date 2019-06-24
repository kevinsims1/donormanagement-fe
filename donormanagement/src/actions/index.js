import axios from 'axios'
export const ADD_USER = "ADD_USER";
export const ADD_USER_FAILURE = "ADD_USER_FAILURE";

export const SignUp = userData => dispatch => {
    axios
      .post("http://localhost:5000/api/users", userData, {
        headers: { Authorization: localStorage.getItem("token") }
      })
      .then(res => {
        dispatch({ type: ADD_USER, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ADD_USER_FAILURE, payload: err.response });
      });
  };
  