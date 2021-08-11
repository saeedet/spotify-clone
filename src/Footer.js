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

function Footer() {
  const [selectedShuffle, setSelectedShuffle] = useState(false);
  const [selectedRepeat, setSelectedRepeat] = useState(false);
  const [playing, setPlaying] = useState(false);
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Usher_Cannes_2016_retusche.jpg"
          alt="Album"
        />
        <div className="footer__songInfo">
          <h4>Yeah!</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon
          onClick={() => setSelectedShuffle(!selectedShuffle)}
          className={selectedShuffle ? "footer__green" : "footer__icon"}
        />
        <SkipPreviousIcon className="footer__icon" />
        {playing ? (
          <PlayCircleFilledOutlinedIcon
            onClick={() => setPlaying(!playing)}
            fontSize="large"
            className="footer__icon footer__player"
          />
        ) : (
          <PauseCircleFilledIcon
            onClick={() => setPlaying(!playing)}
            fontSize="large"
            className="footer__icon footer__player"
          />
        )}
        <SkipNextIcon className="footer__icon" />
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
            <Slider className="footer__green" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
