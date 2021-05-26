import { useEffect } from 'react'
import './Rightpane.css'
import SettingsMenu from './SettingsMenu'

const Userdetails = ({ user }) => {

    useEffect(() => {
        console.log(user)
    }, [])

    const name = user.user.name || 'User'

    return (<div className="right-pane">
        <div className="user-details">
            {name && <div className="username">{name}</div>}
            <div className="setting-button">
                <SettingsMenu />
            </div>
        </div>
        <div className="recently-played">
            <h2 id="heading_1">Recently Played</h2>
            <div className="recent-history container"></div>
        </div>
    </div>)
}

export default Userdetails;