import { useState } from 'react'
import "./Playbar.css"
const Playbar = () => {
  const [play, setPlay] = useState(false);

  const play_pause = () => {
    setPlay(!play);
  }




  return (
    <div className="container-playbar">
      <div className="playbar">
        <div className="song-img"></div>
        <div className="song-description">
          <div className="song-name">Testing-song</div>
          <div className="artist">Testing-artist</div>
        </div>
        <div className="heart">
          <i className="fas fa-heart fa-2x"></i>
        </div>
        <div className="play-controls">
          <div className="previous">
            <i className="fas fa-step-backward fa-2x"></i>
          </div>
          <div className="play" onClick={play_pause}>
            <i className={play ? "fas fa-play fa-3x" : "fas fa-pause-circle fa-3x"}></i>
          </div>
          <div className="next">
            <i className="fas fa-step-forward fa-2x"></i>
          </div>
        </div>
        <div className="duration"></div>
        <div className="repeat">
          <i className="fas fa-redo fa-2x"></i>
        </div>
      </div>
    </div>
  );
}

export default Playbar;