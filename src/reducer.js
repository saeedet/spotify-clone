export const initialState = {
  user: null,
  playlists: [],
  current_playlist: [],
  playing: false,
  current_track: null,
  token: null,
  spotify: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_CURRENT_TRACK":
      return {
        ...state,
        current_track: action.current_track,
      };
    case "SET_CURRENT_PLAYLIST":
      return {
        ...state,
        current_playlist: action.current_playlist,
      };
    default:
      return state;
  }
};

export default reducer;
