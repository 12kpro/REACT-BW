const BASE_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
/*
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";

export const addFavouritesIdAction = (id) => ({ type: ADD_FAVOURITES_ID, payload: id });
export const isPlayAction = (track) => ({ type: IS_PLAY, payload: track });
*/
export const ADD_USER_DATA = "ADD_USER_DATA";

export const addUserData = () => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}me`, {
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
