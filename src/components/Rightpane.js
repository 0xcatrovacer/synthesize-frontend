import { useState } from 'react'
import './Rightpane.css'
import SettingsMenu from './SettingsMenu'

const Userdetails = ({ user }) => {

    const name = user.user.name || "user";
    const firstname = name.split(" ")[0]




    return (<div className="right-pane">
        <div className="user-details">
            <div className="username">{firstname}</div>
            <div className="setting-button">
                <SettingsMenu />
            </div>
        </div>
        <div className="recently-played">
            <h2 id="heading_1">Recently Played</h2>
            <div className="recent-history container"></div>
        </div>
    </div>
    );
}

export default Userdetails;