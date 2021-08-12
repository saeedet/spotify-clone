import { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateProviderValue } from "./StateProvider";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        spotify.getPlaylist(playlists.items[0].id).then((res) => {
          dispatch({
            type: "SET_CURRENT_PLAYLIST",
            current_playlist: res,
          });
        });
      });
      spotify.getPlaylist("37i9dQZEVXcLktu6qTvHdC").then((res) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: res,
        });
      });
      dispatch({
        type: "SET_SPOTIFY",
        spotify: spotify,
      });
    }
  }, [token, dispatch]);

  return <div className="app">{token ? <Player /> : <Login />}</div>;
}

export default App;
