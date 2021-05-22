import './Searchbox.css'
import React, { useState } from "react";
import axios from 'axios';

const Searchbox = () => {

  const [input, setInput] = useState('')

  const [result, setResult] = useState([])

  const [toggledrop, setToggledrop] = useState(false)

  const handleSearch = () => {

    const searchInput = { searchInput: input }

    axios({
      method: 'POST',
      url: 'http://143.110.255.209:8000/search',
      headers: {
        "Content-Type": "application/json",
      },
      data: searchInput
    }).then((res) => {
      setResult(res.data)
    }).catch((e) => {
      console.log({ error: e })
    })
  }


  return (
    <div className="search-wrapper">
      <div className="searchbox-web">
        <div className="search-window">

          <div className="search-icon">
            <i className="fas fa-search fa-lg" id="icon"></i>
          </div>

          <input className="search-area" type="text" value={input}
            onChange={(e) => {
              setInput(e.target.value)
              handleSearch()
            }}
            onFocus={() => {
              setToggledrop(true)
            }}
            onBlur={() => {
            setToggledrop(false)
            }}
          />

        </div>
      </div>
      {result && toggledrop && <div className='search-results'> {result.map((track) => (
        <div className='each-search-result' key={track._id}>
          <div>
            <img src={track.imageURL} className="search-result-image" />
          </div>
          <div className="search-result-title">
            {track.title}
          </div>
          <div className="search-result-artist">
            {track.artists[0]}
          </div>
        </div>
      ))}
      </div>}
    </div>

  );
}

export default Searchbox;
