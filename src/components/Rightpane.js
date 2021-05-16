import { GoogleLogout } from 'react-google-login'
import { useHistory } from 'react-router'
import './Rightpane.css'

const Userdetails = () => {

    const history = useHistory()

    const handleSignOut = () => {
        localStorage.removeItem('token')
        history.push('/')
    }

    return (<div className="right-pane">
        <div className="user-details">
            <div className="username">USERNAME</div>
            <div className="setting-button">
                <GoogleLogout
                    clientId={process.env.REACT_APP_CLIENT_ID}
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign Out UwU. Iska css part jo tha usko comment out kar diya hai</button>
                    )}
                    buttonText="Logout"
                    onLogoutSuccess={handleSignOut}
                >
                </GoogleLogout>
            </div>
        </div>
        <div className="recently-played"></div>
    </div>)
}

export default Userdetails;