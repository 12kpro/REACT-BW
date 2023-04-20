const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_JOB_URL = "hhttps://strive-benchmark.herokuapp.com/api/jobs?";

export const JOB_BOOKMARK_ADD = "JOB_BOOKMARK_ADD";
export const JOB_BOOKMARK_REMOVE = "JOB_BOOKMARK_REMOVE";

export const jobAddToBookmark = (job) => ({ type: JOB_BOOKMARK_ADD, payload: job });
export const jobRemoveFromBookmark = (job) => ({ type: JOB_BOOKMARK_REMOVE, payload: job });
