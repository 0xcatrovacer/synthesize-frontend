import { useState } from "react";
import "./Playbar.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RepeatIcon from "@material-ui/icons/Repeat";

import Music from "./Music";
const Playbar = ({ playingTrack }) => {
  const [playc, setPlay] = useState(false);
  const [heart, setHeart] = useState(false);
  const play_pause = () => {
    setPlay(!playc);
  };
  const heartDetect = () => {
    setHeart(!heart);
  };
  const repeat = () => {};

  return (
    <div className="container-playbar">
      <div className="playbar">
        <div className="">
          {playingTrack && (
            <img className="playbarimg" src={playingTrack.imageURL} />
          )}
        </div>
        <div className="song-description">
          <div className="song-name">{playingTrack && playingTrack.title}</div>
          <div className="artist">
            {playingTrack && (
              <span>
                {" "}
                {playingTrack.artists[0]}{" "}
                {playingTrack.artists.length > 1 ? (
                  <span>ft. {playingTrack.artists[1]}</span>
                ) : (
                  ""
                )}{" "}
              </span>
            )}
          </div>
        </div>

        <div className="heart">
          {heart ? (
            <FavoriteIcon fontSize="large" onClick={heartDetect} />
          ) : (
            <FavoriteBorderIcon fontSize="large" onClick={heartDetect} />
          )}
        </div>
        <div className="play-controls">
          <div className="previous" style={{ fontSize: "50px" }}>
            <SkipPreviousIcon fontSize="inherit" />
          </div>
          <div>{playingTrack && <Music playingTrack={playingTrack} />}</div>
          <div className="next" style={{ fontSize: "50px" }}>
            <SkipNextIcon fontSize="inherit" />
          </div>
        </div>
        <div className="duration"></div>
        <div className="repeat" onClick={repeat} style={{ fontSize: "40px" }}>
          <RepeatIcon fontSize="inherit" />
        </div>
      </div>
    </div>
  );
};

export default Playbar;
