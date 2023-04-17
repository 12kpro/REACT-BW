const BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer/search?q=";
const AUTHORIZATION = `Bearer ${process.env.REACT_APP_API_KEY}`;
/*
export const CREATE_PLAYLIST = "CREATE_PLAYLIST";
export const DELETE_PLAYLIST = "DELETE_PLAYLIST";

export const addFavouritesIdAction = (id) => ({ type: ADD_FAVOURITES_ID, payload: id });
export const isPlayAction = (track) => ({ type: IS_PLAY, payload: track });

export const addMainSearchAction = (query) => {
  return async (dispatch) => {
    try {
      let resp = await fetch(`${BASE_URL}${query}`);
      if (resp.ok) {
        let { data } = await resp.json(); //destrutturazione per prendere direttamente data dal risultato della fetch
        //dispatch({ type: ADD_MAIN_SEARCH, id: query, payload: data });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };
};
*/
