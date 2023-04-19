import { DELETE_USER_POST, GET_USER_POSTS, POST_USER_POST, PUT_USER_POST } from "../action/posts";

const postsDataReducer = (state = [], action) => {
  switch (action.type) {
    case GET_USER_POSTS:
      return action.payload;
    case POST_USER_POST:
      return [...state, action.payload];
    case PUT_USER_POST:
      return state.map((posts) => {
        if (posts._id !== action.id) {
          return posts;
        }
        return {
          ...action.payload,
        };
      });
    case DELETE_USER_POST:
      return state.filter((posts) => posts._id !== action.payload);
    default:
      return state;
  }
};

export default postsDataReducer;
