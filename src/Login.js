import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="spotify"
      />
      <p className="login__instruction">
        This project uses Spotify API which has a strick privacy and limited
        access. It only allows you to read your spotify account data including
        tracks and playlists. Although, If you are playing in other active
        devices, your are able to play songs or skip tracks in your queue
        through this app.
      </p>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
      <p className="footer__copyright">
        Designed by <a href="http://saeedet.com/">SaEeD ET</a>
      </p>
    </div>
  );
}

export default Login;
