const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile";

/*
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";

export const addFavouritesIdAction = (id) => ({ type: ADD_FAVOURITES_ID, payload: id });
export const isPlayAction = (track) => ({ type: IS_PLAY, payload: track });
*/
export const ADD_USER_DATA = "ADD_USER_DATA";
export const ADD_USERS = "ADD_USERS";

export const GET_USER_EXPERIENCES = "GET_USER_EXPERIENCES";
export const POST_USER_EXPERIENCE = "POST_USER_EXPERIENCE";
export const PUT_USER_EXPERIENCE = "PUT_USER_EXPERIENCE";
export const DELETE_USER_EXPERIENCE = "DELETE_USER_EXPERIENCE";

export const getUserExperiences = (userId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/${userId}/experiences`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
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

export const postUserExperience = (userId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/${userId}/experiences`, {
        method: "POST",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: POST_USER_EXPERIENCE, payload: data });
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

export const putUserExperience = (userId, expId, body) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/${userId}/experiences/${expId}`, {
        method: "PUT",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        },
        body
      });
      if (resp.ok) {
        let data = await resp.json();
        console.log(data);
        //data = data.slice(0, 10);
        //dispatch({ type: ADD_USERS, payload: data });
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

export const deleteUserExperience = (userId, expId) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/${userId}/experiences//${expId}`, {
        method: "DELETE",
        headers: {
          Authorization: AUTHORIZATION,
          "Content-Type": "application/json"
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        console.log(data);
        //data = data.slice(0, 10);
        //dispatch({ type: ADD_USERS, payload: data });
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

export const addUsers = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        data = data.slice(0, 10);
        dispatch({ type: ADD_USERS, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};

export const addUserData = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}/me`, {
        headers: {
          Authorization: AUTHORIZATION
        }
      });
      if (resp.ok) {
        let data = await resp.json();
        dispatch({ type: ADD_USER_DATA, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};
