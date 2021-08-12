import React from "react";
import "./Body.css";
import Header from "./Header";
import { useStateProviderValue } from "./StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

function Body() {
  const [{ spotify, playing, current_playlist }, dispatch] =
    useStateProviderValue();
  const playPlaylist = () => {
    spotify
      .play({
        context_uri: current_playlist.uri,
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then(() => {
          spotify.getMyCurrentPlaybackState().then((response) => {
            dispatch({
              type: "SET_CURRENT_TRACK",
              current_track: response.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then(() => {
        spotify.getMyCurrentPlayingTrack().then(() => {
          spotify.getMyCurrentPlaybackState().then((response) => {
            dispatch({
              type: "SET_CURRENT_TRACK",
              current_track: response.item,
            });
            dispatch({
              type: "SET_PLAYING",
              playing: true,
            });
          });
        });
      });
  };
  return (
    <div className="body">
      <Header />

      <div className="body__info">
        <img
          src={current_playlist.images ? current_playlist?.images[0].url : ""}
          alt={current_playlist?.name}
        />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{current_playlist?.name}</h2>
          <p>
            {current_playlist?.owner?.display_name} .{" "}
            {current_playlist?.tracks?.total} Songs
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          {playing ? (
            <PauseCircleFilledIcon
              className="body__play"
              onClick={() =>
                dispatch({
                  type: "SET_PLAYING",
                  playing: false,
                })
              }
            />
          ) : (
            <PlayCircleFilledIcon
              className="body__play"
              onClick={playPlaylist}
            />
          )}

          <FavoriteIcon className="body__fav" />
          <MoreHorizIcon className="body__more" />
        </div>

        {current_playlist?.tracks?.items.map((item) => (
          <SongRow playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
