import React, { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./StateProvider";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import "./App.css";
import Login from "./Login";

const s = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    // Set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    let _token = hash.access_token;

    if (_token) {
      s.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      s.getMe().then((user)=>{
        dispatch({
          type:"SET_USER",
          user:user
        })
      })

     s.getUserPlaylists().then((playlists)=>{
       dispatch({
         type:"SET_PLAYLISTS",
         playlists:playlists,
       })
     })

    //  s.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
    //     dispatch({
    //       type: "SET_DISCOVER_WEEKLY",
    //       discover_weekly: response,
    //     })
    //   );

     
     
    }


  }, [token, dispatch]);

  return (
    <div className="app">
      {!token && <Login />}
      {token && <Player spotify={s} />}
    </div>
  );
}

export default App;