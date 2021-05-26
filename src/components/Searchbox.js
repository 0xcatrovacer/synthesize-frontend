import "./Searchbox.css";
import React, { useState } from "react";
import axios from "axios";
import Playbar from "./Playbar";

const Searchbox = ({ setPlayingTrack }) => {
  const [input, setInput] = useState("");

  const [result, setResult] = useState([]);

  const [toggledrop, setToggledrop] = useState(false);

  const handleSearch = () => {
    const searchInput = { searchInput: input };

    axios({
      method: "POST",
      url: `${process.env.REACT_APP_SYNTH_BACKEND}/search`,
      headers: {
        "Content-Type": "application/json",
      },
      data: searchInput,
    })
      .then((res) => {
        setResult(res.data);
      })
      .catch((e) => {
        console.log({ error: e });
      });
  };

  return (
    <div className="search-wrapper">
      <div className="searchbox-web">
        <div className="search-window">
          <div className="search-icon">
            <i className="fas fa-search fa-lg" id="icon"></i>
          </div>

          <input
            className="search-area"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              handleSearch();
            }}
            onFocus={() => {
              setToggledrop(true);
            }}
            onBlur={() => {
              setTimeout(() => {
                setToggledrop(false);
              }, 500);
            }}
          />
        </div>
      </div>
      {result && toggledrop && (
        <div className="search-results">
          {" "}
          {result.map((track) => (
            <div
              className="each-search-result"
              key={track._id}
              onClick={(e) => setPlayingTrack(track)}
            >
              <div>
                <img src={track.imageURL} className="search-result-image" />
              </div>
              <div className="search-result-title">{track.title}</div>
              <div className="search-result-artist">{track.artists[0]}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Searchbox;
