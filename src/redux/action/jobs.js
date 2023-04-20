const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_JOB_URL = "hhttps://strive-benchmark.herokuapp.com/api/jobs?";

export const JOB_BOOKMARK_ADD = "JOB_BOOKMARK_ADD";
export const JOB_BOOKMARK_REMOVE = "JOB_BOOKMARK_REMOVE";
export const JOB_SEARCH_KIND_UPDATE = "JOB_SEARCH_KIND_UPDATE";

export const jobAddToBookmark = (job) => ({ type: JOB_BOOKMARK_ADD, payload: job });
export const jobRemoveFromBookmark = (job) => ({ type: JOB_BOOKMARK_REMOVE, payload: job });
export const jobSearchKindUpdate = (str) => ({ type: JOB_SEARCH_KIND_UPDATE, payload: str });
