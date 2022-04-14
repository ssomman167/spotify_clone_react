import React from 'react'
import "./Footer.css"

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
// import ShuffleIcon from "@mui/icons-material/Shuffle";
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from "@mui/icons-material/Repeat";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import { Slider,Grid } from '@mui/material';

function Footer() {
  return (
    <div className='footer'>
      <div className='fl'>
      {/* <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )} */}
      </div>
      <div className='fc'>
<ShuffleIcon className="hola"/>
<SkipPreviousIcon/>
<PlayCircleIcon/>
<SkipNextIcon/>
<RepeatIcon className="hola"/>
      </div>
      <div className='fr'>
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default Footer