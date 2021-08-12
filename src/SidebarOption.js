import React from "react";
import "./SidebarOption.css";
import { useStateProviderValue } from "./StateProvider";

function SidebarOption({ title, Icon, id }) {
  const [{ spotify }, dispatch] = useStateProviderValue();

  const setCurrentPlaylist = (id) => {
    spotify.getPlaylist(id).then((res) => {
      dispatch({
        type: "SET_CURRENT_PLAYLIST",
        current_playlist: res,
      });
    });
  };

  return (
    <div className="sidebarOption">
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h4>{title}</h4>
      ) : (
        <p onClick={() => setCurrentPlaylist(id)}>{title}</p>
      )}
    </div>
  );
}

export default SidebarOption;
