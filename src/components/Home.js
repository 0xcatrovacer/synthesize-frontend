import React from 'react'
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
        </div>
    )
}

export default Home
