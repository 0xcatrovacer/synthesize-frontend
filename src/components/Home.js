import './Home.css'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import Playbar from './Playbar'
import Userdetails from './Rightpane'
import Searchbox from './Searchbox'
import Sidebar from './Sidebar'
import axios from 'axios';


const Home = (user) => {

    const [playingTrack, setPlayingTrack] = useState(null)

    const [tracksP, setTracksP] = useState([])
    const [tracksH, setTracksH] = useState([])
    const [tracksR, setTracksR] = useState([])
    const [tracksPH, setTracksPH] = useState([])
    const [tracksEDM, setTracksEDM] = useState([])

    useEffect(() => {

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SYNTH_BACKEND}/genretracks`,
            data: { genre: 'Pop' }
        }).then((res) => {
            setTracksP(res.data)
        }).catch((e) => {
            console.log(e.message)
        })

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SYNTH_BACKEND}/genretracks`,
            data: { genre: 'Hip Hop' }
        }).then((res) => {
            setTracksH(res.data)
        }).catch((e) => {
            console.log(e.message)
        })

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SYNTH_BACKEND}/genretracks`,
            data: { genre: 'RnB' }
        }).then((res) => {
            setTracksR(res.data)
        }).catch((e) => {
            console.log(e.message)
        })

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SYNTH_BACKEND}/genretracks`,
            data: { genre: 'proghouse' }
        }).then((res) => {
            setTracksPH(res.data)
        }).catch((e) => {
            console.log(e.message)
        })

        axios({
            method: 'POST',
            url: `${process.env.REACT_APP_SYNTH_BACKEND}/genretracks`,
            data: { genre: 'edm' }
        }).then((res) => {
            setTracksEDM(res.data)
        }).catch((e) => {
            console.log(e.message)
        })

    }, [])


    const ref = React.createRef();
    // const handleScroll = (scrollOffset) => {
    //     ref.current.scrollLeft += scrollOffset;
    // };


    return (
        <div className="home-web">
            <Searchbox setPlayingTrack={setPlayingTrack} />
            <Sidebar />
            <Playbar playingTrack={playingTrack} />
            {user && <Userdetails user={user} />}
            <div className="Heading">Popular Genres</div>

            <div className="Container">
                <div className="pop">Pop</div>

                <div className="hh">Hip Hop</div>

                <div className="rock">R&B</div>

                <div className="pr">Progressive House</div>

                <div className="ed">Dance/Electronic</div>

                <div className="cards">
                    <div className="cards1" ref={ref}>
                        {tracksP &&
                            tracksP.map((track) => (
                                <span className="track" key={track._id}>
                                    <div
                                        onClick={() => {
                                            setPlayingTrack(track);
                                        }}
                                    >
                                        <img className="image" src={track.imageURL} />
                                    </div>
                                    <span className="tname">{track.title}</span>
                                    <span className="tartist">
                                        {track.artists[0]}{" "}
                                        {track.artists.length > 1 ? (
                                            <span>ft. {track.artists[1]}</span>
                                        ) : (
                                            ""
                                        )}{" "}
                                    </span>
                                </span>
                            ))}
                    </div>
                    <div className="cards2" ref={ref}>
                        {tracksH.map((track) => (
                            <span className="track" key={track._id}>
                                <div
                                    onClick={() => {
                                        setPlayingTrack(track);
                                    }}
                                >
                                    <img className="image" src={track.imageURL} />
                                </div>
                                <span className="tname">{track.title}</span>
                                <span className="tartist">
                                    {track.artists[0]}{" "}
                                    {track.artists.length > 1 ? (
                                        <span>ft. {track.artists[1]}</span>
                                    ) : (
                                        ""
                                    )}{" "}
                                </span>
                            </span>
                        ))}
                    </div>

                    <div className="cards3" ref={ref}>
                        {tracksR.map((track) => (
                            <span className="track" key={track._id}>
                                <div
                                    onClick={() => {
                                        setPlayingTrack(track);
                                    }}
                                >
                                    <img className="image" src={track.imageURL} />
                                </div>
                                <span className="tname">{track.title}</span>
                                <span className="tartist">
                                    {track.artists[0]}{" "}
                                    {track.artists.length > 1 ? (
                                        <span>ft. {track.artists[1]}</span>
                                    ) : (
                                        ""
                                    )}{" "}
                                </span>
                            </span>
                        ))}
                    </div>

                    <div className="cards4" ref={ref}>
                        {tracksPH.map((track) => (
                            <span className="track" key={track._id}>
                                <div
                                    onClick={() => {
                                        setPlayingTrack(track);
                                    }}
                                >
                                    <img className="image" src={track.imageURL} />
                                </div>
                                <span className="tname">{track.title}</span>
                                <span className="tartist">
                                    {track.artists[0]}{" "}
                                    {track.artists.length > 1 ? (
                                        <span>ft. {track.artists[1]}</span>
                                    ) : (
                                        ""
                                    )}{" "}
                                </span>
                            </span>
                        ))}
                    </div>

                    <div className="cards5" ref={ref}>
                        {tracksEDM.map((track) => (
                            <span className="track" key={track._id}>
                                <div
                                    onClick={() => {
                                        setPlayingTrack(track);
                                    }}
                                >
                                    <img className="image" src={track.imageURL} />
                                </div>
                                <span className="tname">{track.title}</span>
                                <span className="tartist">
                                    {track.artists[0]}{" "}
                                    {track.artists.length > 1 ? (
                                        <span>ft. {track.artists[1]}</span>
                                    ) : (
                                        ""
                                    )}{" "}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;


















