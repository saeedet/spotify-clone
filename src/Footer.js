import React, { useState } from "react";
import "./Footer.css";
import PlayCircleFilledOutlinedIcon from "@material-ui/icons/PlayCircleFilledOutlined";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";
import { useStateProviderValue } from "./StateProvider";

function Footer() {
  const [selectedShuffle, setSelectedShuffle] = useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState(false);
  const [{ playing, current_track, spotify, current_playlist }, dispatch] =
    useStateProviderValue();

  const skipNext = () => {
    spotify.skipToNext().then(() => {
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
  const skipPrevious = () => {
    spotify.skipToPrevious().then(() => {
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
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={
            current_track
              ? current_track?.album.images[0].url
              : current_playlist?.images
              ? current_playlist?.images[0].url
              : ""
          }
          alt={
            current_track ? current_track?.album.name : current_playlist?.name
          }
        />
        <div className="footer__songInfo">
          <h5>{current_track?.name}</h5>
          <p>{current_track?.artists[0].name}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon
          onClick={() => setSelectedShuffle(!selectedShuffle)}
          className={selectedShuffle ? "footer__green" : "footer__icon"}
        />
        <SkipPreviousIcon className="footer__icon" onClick={skipPrevious} />
        {!playing ? (
          <PlayCircleFilledOutlinedIcon
            onClick={() =>
              dispatch({
                type: "SET_PLAYING",
                playing: !playing,
              })
            }
            fontSize="large"
            className="footer__icon footer__player"
          />
        ) : (
          <PauseCircleFilledIcon
            onClick={() =>
              dispatch({
                type: "SET_PLAYING",
                playing: !playing,
              })
            }
            fontSize="large"
            className="footer__icon footer__player"
          />
        )}
        <SkipNextIcon className="footer__icon" onClick={skipNext} />
        <RepeatIcon
          onClick={() => setSelectedRepeat(!selectedRepeat)}
          className={selectedRepeat ? "footer__green" : "footer__icon"}
        />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeUpIcon />
          </Grid>
          <Grid item xs>
            <Slider
              aria-labelledby="continuous-slider"
              className="footer__green"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
