import React from 'react'
import Music from './Music'
import Playbar from './Playbar'
import Userdetails from './Rightpane'
import Searchbox from './Searchbox'
import Sidebar from './Sidebar'

const Home = () => {
    return (
        <div>
            <Searchbox />
            <Sidebar />
            <Playbar />
            <Userdetails />
            <Music/>
        </div>
    )
}

export default Home
