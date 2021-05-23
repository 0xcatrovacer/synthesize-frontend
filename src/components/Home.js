import './Home.css'
import { useState } from "react";
import { Link } from "react-router-dom";
import React from 'react'
import Playbar from './Playbar'
import Userdetails from './Rightpane'
import Searchbox from './Searchbox'
import Sidebar from './Sidebar'


const Home = () => {


    const ref = React.createRef();
    const handleScroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    };
    const tracksP = [
        {
            id: 1,
            name: 'Watermelon Sugar High',
            artist: 'Harry Styles',
            imageurl: "https://media1.popsugar-assets.com/files/thumbor/bQAXmLCEwIVoCSZpkZfeIBIHIcE/950x289:1802x1141/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/11/18/709/n/1922283/3773aeff5dd2c076c9ce85.68345926_/i/tweets-memes-about-harry-styles-watermelon-sugar-song.png",
            url: "/"
        },
        {
            id: 2,
            name: 'Perfect',
            artist: 'Ed Sheeran',
            imageurl: "https://m.media-amazon.com/images/M/MV5BMGU5YTRjMTUtZDU4Mi00NjFlLWExYTAtMjVkN2JmOTE1Y2Q2XkEyXkFqcGdeQXVyNjE0ODc0MDc@._V1_.jpg",
            url: "/"
        },
        {
            id: 3,
            name: 'Positions',
            artist: 'Ariana Grande',
            imageurl: "https://spinexmusic.com/wp-content/uploads/2020/12/5f9ba68c6f5b3100117245bd.jpg",
            url: "/"
        },
        {
            id: 4,
            name: 'Blinding Lights',
            artist: 'The Weekend',
            imageurl: "https://cdns-images.dzcdn.net/images/cover/a38ef87aa2917be1fe62866357f8ade1/500x500.jpg",
            url: "/"

        },
        {
            id: 5,
            name: 'I like Me Better',
            artist: 'Lauv',
            imageurl: "https://ringtones.zone/media/images/i-like-me-better.jpg",
            url: "/"
        },
        {
            id: 6,
            name: 'Talking To The Moon',
            artist: 'Bruno Mars',
            imageurl: "https://images-na.ssl-images-amazon.com/images/I/41cMY16p65L._SY445_SX342_QL70_ML2_.jpg",
            url: "/"
        },
        {
            id: 7,
            name: 'The Less I Know The Better',
            artist: 'Tame Impala',
            imageurl: "https://i.imgur.com/WZXn6E7.jpg",
            url: "/"
        },

        {
            id: 8,
            name: 'Sugar Crash',
            artist: 'ElyOtto',
            imageurl: "https://i1.sndcdn.com/artworks-hRzIFeW0ZppcyZXa-j50yAg-t500x500.jpg",
            url: "/"
        },
        {
            id: 9,
            name: 'Girls Like You',
            artist: 'Maroon 5',
            imageurl: "https://i1.sndcdn.com/artworks-000386942226-i4u2y9-t500x500.jpg",
            url: "/"
        },
        {
            id: 10,
            name: 'Senorita',
            artist: 'Shawn Mendes & Camila Cabello',
            imageurl: "https://i.ytimg.com/vi/tcrTQUVkUe0/maxresdefault.jpg",
            url: "/"
        },


    ]

    const tracksH = [
        {
            id: 1,
            name: 'Sicko Mode',
            artist: 'Travis Scott',
            imageurl: "https://wallpapercave.com/wp/wp3863342.jpg",
            url: "/"

        },
        {
            id: 2,
            name: 'Every Chance I Get',
            artist: 'DJ Khaled, Lil Baby, Lil Durk',
            imageurl: "https://pbs.twimg.com/media/E0l0NAfXEAQ9HJ3.jpg",
            url: "/"

        },
        {
            id: 3,
            name: "Do For Love",
            artist: '2Pac',
            imageurl: "https://scontent.fknu2-1.fna.fbcdn.net/v/t1.18169-1/1939936_1453699951532317_1815130333_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=iRhHsRT5xjUAX89Y1VE&_nc_ht=scontent.fknu2-1.fna&oh=6427fdafe148be06e9a155f98e6b4289&oe=60C7AB4F",
            url: "/"
        },
        {
            id: 4,
            name: 'Skechers',
            artist: 'DripReport, Tyga',
            imageurl: "https://images-na.ssl-images-amazon.com/images/I/41zoLNQFMAL._SY445_SX342_QL70_ML2_.jpg",
            url: "/"

        },
        {
            id: 5,
            name: 'Rap God',
            artist: 'Eminem',
            imageurl: "https://shadyrecords.com/wp-content/uploads/2013/11/rap-god-2.jpg",
            url: "/"
        },
        {
            id: 6,
            name: 'Alright',
            artist: 'Kendrick Lamar',
            imageurl: "https://i.ytimg.com/vi/Z-48u_uWMHY/maxresdefault.jpg",
            url: "/"
        },
        {
            id: 7,
            name: 'Lose Yourself',
            artist: 'Eminem',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d6/Lose_Yourself.jpg/220px-Lose_Yourself.jpg",
            url: "/"
        },

        {
            id: 8,
            name: 'Rockstar',
            artist: 'DaBaby',
            imageurl: "https://images-na.ssl-images-amazon.com/images/I/51mUv%2Bn8zVL._SY445_SX342_QL70_ML2_.jpg",
            url: "/"
        },
        {
            id: 9,
            name: 'In da Club',
            artist: '50 Cent',
            imageurl: "https://img.discogs.com/MYma_751heJebMnNXzY7N4LQSfA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8304519-1565886736-9041.png.jpg",
            url: "/"
        },
        {
            id: 10,
            name: 'For The Night',
            artist: 'Pop Smoke, Lil Baby, DaBaby',
            imageurl: "https://i.pinimg.com/564x/d7/76/54/d7765419c84eb88cd5fa84afcb3964f5.jpg",
            url: "/"
        },




    ]

    const tracksR = [
        {
            id: 1,
            name: '24K Magic',
            artist: 'Bruno Mars',
            imageurl: "https://capshop.store/wp-content/uploads/2018/04/Dad-Bruno-Mars-24k-Magic-Gorras-K-pop-Bone-Hat-Polo-Baseball-Cap-Adjustable-Hip-Hop.jpg",
            url: "/"

        },
        {
            id: 2,
            name: 'Peaches',
            artist: 'Justin Bieber',
            imageurl: "https://songs5.vlcmusic.com/tiny_image/timthumb.php?q=100&w=250&src=images/36742.png",
            url: "/"

        },
        {
            id: 3,
            name: "Heartless",
            artist: 'The Weekend',
            imageurl: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
            url: "/"
        },
        {
            id: 4,
            name: 'Go Crazy',
            artist: 'Chris Brown & Young Thug',
            imageurl: "https://images.hungama.com/c/1/6a3/6d0/53547222/53547222_300x300.jpg",
            url: "/"

        },
        {
            id: 5,
            name: "That's What I Like",
            artist: 'Bruno Mars',
            imageurl: "https://qph.fs.quoracdn.net/main-qimg-c958e470a83f7b515e4f6c5691669881",
            url: "/"
        },
        {
            id: 6,
            name: 'Good Days',
            artist: 'SZA',
            imageurl: "https://thatgrapejuice.net/wp-content/uploads/2021/01/sza-good-days-thatgrapejuice-hot-100.jpg",
            url: "/"
        },

        {
            id: 7,
            name: 'Streets',
            artist: 'Doja Cat',
            imageurl: "https://1.bp.blogspot.com/-WpsoUO-7WZg/YEb53MM-YbI/AAAAAAAAC4w/XXvcwb-DLLcfgCRW1nvIR-hwgz2c43nhQCLcBGAsYHQ/w1200-h630-p-k-no-nu/Doja-Cat-Streets-Lyrics.jpg",
            url: "/"
        },

        {
            id: 8,
            name: 'Needed Me',
            artist: 'Rihanna',
            imageurl: "https://i1.sndcdn.com/artworks-000169352332-60eder-t500x500.jpg",
            url: "/"
        },
        {
            id: 9,
            name: 'Yummy',
            artist: 'Justin Bieber',
            imageurl: "https://images.squarespace-cdn.com/content/v1/5c9687f8aadd347a087b4ab9/1598022801416-Q5T4RFTDWQU0RTAH52W8/ke17ZwdGBToddI8pDm48kNZxNsygnuZoTFLx140Mxd5Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzCo4oK0C5F_l25IDUANaA6bfBkX5L4tdZ2qcfXgOn7TufsRQ1-gg2XsxHPyU5WGCY/1dca9cefa8e320c2d16e629337838c11.jpg",
            url: "/"
        },
        {
            id: 10,
            name: 'Call Out My Name',
            artist: 'The Weekend',
            imageurl: "https://images.genius.com/ccec68be22e8859347bbe551cb2288e3.1000x1000x1.png",
            url: "/"
        },




    ]

    const tracksPH = [
        {
            id: 1,
            name: 'High On Life',
            artist: 'Martin Garrix feat. Bonn',
            imageurl: "https://i.imgur.com/twjbMWJ.jpg",
            url: "/"

        },
        {
            id: 2,
            name: 'Summer Days',
            artist: 'Martin Garrix',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/4/46/Martin_Garrix_-_Summer_Days.png",
            url: "/"


        },
        {
            id: 3,
            name: "Faded",
            artist: 'Alan Walker',
            imageurl: "https://www.lololyrics.com/img/cover/31845.jpeg",
            url: "/"
        },
        {
            id: 4,
            name: 'The Nights',
            artist: 'Avicii',
            imageurl: "https://www.logictemplates.com/media/catalog/product/a/v/avicci-the-nights.jpg",
            url: "/"


        },
        {
            id: 5,
            name: 'In the Name Of Love',
            artist: 'Martin Garrix & Bebe Rexha',
            imageurl: "https://pbs.twimg.com/media/ELxT5ouUYAAhyN8.jpg",
            url: "/"
        },
        {
            id: 6,
            name: 'Forbidden Voices',
            artist: 'Martin Garrix',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Forbidden_Voices_Martin_Garrix.jpg/220px-Forbidden_Voices_Martin_Garrix.jpg",
            url: "/"
        },

        {
            id: 7,
            name: 'No Money',
            artist: 'Galantis',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/thumb/4/44/NoMoney.jpeg/220px-NoMoney.jpeg",
            url: "/"
        },

        {
            id: 8,
            name: 'If I lose Myself',
            artist: 'Alesso vs OneRepublic',
            imageurl: "https://www.magneticmag.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTMzMDU3NTA5MTU3MDgzNjE0/review-alesso-vs-one-republic-if-i-lose-myself-refune.jpg",
            url: "/"
        },
        {
            id: 9,
            name: 'Under Control',
            artist: 'Alesso ft. Calvin Harris',
            imageurl: "https://a10.gaanacdn.com/images/albums/39/135539/crop_175x175_135539.jpg",
            url: "/"
        },
        {
            id: 10,
            name: 'Gold Skies',
            artist: 'Martin Garrix',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/GoldSkiesEP.png/220px-GoldSkiesEP.png",
            url: "/"
        },
    ]

    const tracksEDM = [
        {
            id: 1,
            name: 'Wake Me Up',
            artist: 'Avicii',
            imageurl: "https://fringster.com/content/images/22806.jpg",
            url: "/"

        },
        {
            id: 2,
            name: 'Ignite',
            artist: 'K-391 & Alan Walker',
            imageurl: "https://lyricswallah.com/wp-content/uploads/2020/02/ignite-song-lyrics-k-391-alan-walker.jpg",
            url: "/"

        },
        {
            id: 3,
            name: "Lean On",
            artist: 'DJ Snake',
            imageurl: "https://www.reservoir-media.com/wp-content/uploads/2019/12/lean-on-2.jpg",
            url: "/"
        },
        {
            id: 4,
            name: 'Feel So Close',
            artist: 'Calvin Harris',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/0/07/Calvin_Harris_-_Feel_So_Close.png",
            url: "/"

        },
        {
            id: 5,
            name: 'Let Me Love You',
            artist: 'DJ Snake',
            imageurl: "https://direct.rhapsody.com/imageserver/images/alb.251384686/500x500.jpg",
            url: "/"
        },
        {
            id: 6,
            name: 'Something Just Like This',
            artist: 'Coldplay',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/5/57/Something_Just_Like_This.png",
            url: "/"
        },

        {
            id: 7,
            name: 'This Is What You Came For',
            artist: 'Calvis Harris & Rihanna',
            imageurl: "https://i.pinimg.com/736x/67/e6/a5/67e6a5dcedf48225e3365776f89e3d82.jpg",
            url: "/"
        },

        {
            id: 8,
            name: 'Animals',
            artist: 'Martin Garrix',
            imageurl: "https://data.whicdn.com/images/85865501/original.jpg",
            url: "/"
        },
        {
            id: 9,
            name: 'All We Know',
            artist: 'The Chainsmokers ft. Phoebe Ryan',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/f/f7/All_We_Know_%28featuring_Phoebe_Ryan%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
            url: "/"
        },
        {
            id: 10,
            name: 'Closer',
            artist: 'The Chainsmokers ft. Halsey',
            imageurl: "https://upload.wikimedia.org/wikipedia/en/a/a5/Closer_%28featuring_Halsey%29_%28Official_Single_Cover%29_by_The_Chainsmokers.png",
            url: "/"
        },

    ]



    return (
        <div className="home-web">
            <Searchbox />
            <Sidebar />
            <Playbar />
            <Userdetails />
            <div className="Heading">Popular Genres</div>



            <div className="Container">



                <div className="pop">Pop</div>

                <div className="hh">Hip Hop</div>


                <div className="rock">R&B</div>

                <div className="pr">Progressive House</div>

                <div className="ed">Dance/Electronic</div>


                <div className="cards">



                    <div className="cards1" ref={ref}>

                        {tracksP.map((track) => (
                            <span className="track" key={track.id}>
                                <Link to={track.url}><img className="image" src={track.imageurl} /></Link>
                                <span className="tname">{track.name}</span>
                                <span className="tartist">{track.artist}</span>

                            </span>


                        ))}

                    </div>
                    <div className="cards2" ref={ref}>

                        {tracksH.map((track) => (
                            <span className="track" key={track.id}>
                                <Link to={track.url}><img className="image" src={track.imageurl} /></Link>
                                <span className="tname">{track.name}</span>
                                <span className="tartist">{track.artist}</span>
                            </span>

                        ))}

                    </div>

                    <div className="cards3" ref={ref}>

                        {tracksR.map((track) => (
                            <span className="track" key={track.id}>
                                <Link to={track.url}><img className="image" src={track.imageurl} /></Link>
                                <span className="tname">{track.name}</span>
                                <span className="tartist">{track.artist}</span>
                            </span>

                        ))}

                    </div>


                    <div className="cards4" ref={ref}>

                        {tracksPH.map((track) => (
                            <span className="track" key={track.id}>
                                <Link to={track.url}><img className="image" src={track.imageurl} /></Link>
                                <span className="tname">{track.name}</span>
                                <span className="tartist">{track.artist}</span>
                            </span>

                        ))}

                    </div>
                    <div className="slide5"><span className="angleLeft5 sliderButton" onClick={() => handleScroll(-800)} >&#10094;</span>
                        <span className="angleRight5 sliderButton" onClick={() => handleScroll(800)}>&#10095;</span></div>



                    <div className="cards5" ref={ref}>

                        {tracksEDM.map((track) => (
                            <span className="track" key={track.id}>
                                <Link to={track.url}><img className="image" src={track.imageurl} /></Link>
                                <span className="tname">{track.name}</span>
                                <span className="tartist">{track.artist}</span>
                            </span>


                        ))}

                    </div>



                </div>
            </div>
        </div>

    )
};
export default Home;


















