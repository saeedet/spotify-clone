// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-nu-two.vercel.app/";

const CLIENT_ID = "c1ac6b4acd99483e9d0f0be6985e8dce";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${CLIENT_ID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
