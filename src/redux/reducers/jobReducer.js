import { JOB_BOOKMARK_ADD, JOB_BOOKMARK_REMOVE, JOB_SEARCH_KIND_UPDATE } from "../action/jobs";

const jobReducer = (state = { bookmarks: [], searchResults: [], searchKind: "search" }, action) => {
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
    case JOB_SEARCH_KIND_UPDATE:
      return {
        ...state,
        searchKind: action.payload
      };
    default:
      return state;
  }
};

export default jobReducer;
