import { DELETE_USER_EXPERIENCE, GET_USER_EXPERIENCES, POST_USER_EXPERIENCE, PUT_USER_EXPERIENCE } from "../action";

const userDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_EXPERIENCES:
      return action.payload;
    case POST_USER_EXPERIENCE:
      return [...state, action.payload];
    /*    case PUT_USER_EXPERIENCE:
      return action.payload;*/
    case DELETE_USER_EXPERIENCE:
      return action.payload;
    default:
      return state;
  }
};

export default userDataReducer;
