import { JOB_BOOKMARK_ADD, JOB_BOOKMARK_REMOVE } from "../action/jobs";

const jobReducer = (state = { bookmarks: [] }, action) => {
  switch (action.type) {
    case JOB_BOOKMARK_ADD:
      return {
        ...state,
        bookmarks: [...state.bookmarks, action.payload]
      };
    case JOB_BOOKMARK_REMOVE:
      return {
        ...state,
        bookmarks: state.bookmarks.filter((job) => job._id !== action.payload._id)
      };
    default:
      return state;
  }
};

export default jobReducer;
