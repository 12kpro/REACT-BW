const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_URL = "https://striveschool-api.herokuapp.com/api/posts/";

export const GET_USER_POSTS = "GET_USER_POSTS";
export const POST_USER_POST = "POST_USER_POST";
export const PUT_USER_POST = "PUT_USER_POST";
export const DELETE_USER_POST = "DELETE_USER_POST";

export const getUserPosts = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: GET_USER_POSTS, payload: data.slice(0, 15) });
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const postUserPost = (postId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}${postId}`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        //dispatch({ type: POST_USER_POST, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const putUserPost = (postId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}${postId}`, {
        method: "PUT",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        //let data = await resp.json();
        //console.log(data);
        //dispatch({ type: PUT_USER_POST, id: expId, payload: JSON.parse(body) });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};

export const deleteUserPost = (postId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        }
      });
      if (resp.ok) {
        //dispatch({ type: DELETE_USER_POST, payload: expId });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      console.log("fetch loading finish");
    }
  };
};
