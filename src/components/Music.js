import "./Music.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import PauseCircleFilledIcon from "@material-ui/icons/PauseCircleFilled";

import React, { useState, useEffect } from "react";

const useAudio = (url) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Music = ({ playingTrack }) => {

  const url = playingTrack.url

  useEffect(() => {
    console.log(playingTrack)
  }, [playingTrack])

  const [playing, toggle] = useAudio(url);

  return (
    <div style={{ fontSize: "50px" }} onClick={toggle}>
      {playing ? (
        <PauseCircleFilledIcon fontSize="inherit" />
      ) : (
        <PlayCircleFilledIcon fontSize="inherit" />
      )}
    </div>
  );
};

export default Music;
