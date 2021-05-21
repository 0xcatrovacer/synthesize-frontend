import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from "axios"
import { useHistory } from 'react-router'

const Login = () => {

    const history = useHistory()

    const responseGoogle = (response) => {
        const access_token = response.accessToken
        const email = response.profileObj.email

        axios.post(`${process.env.REACT_APP_SYNTH_BACKEND}/auth/oauthlogin`, {
            access_token,
            email
        }).then((res) => {
            if (res.data.ok) {
                localStorage.setItem('token', response.tokenId)
                history.push('/home')
            } else {
                console.log('error')
            }
        }).catch((e) => {
            console.log(e)
        });
    }

    const failureGoogle = () => {
        console.log('Failed to sign in')
    }

    return (
        <div>
            <GoogleLogin
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>Login with Google</button>
                )}
                clientId={process.env.REACT_APP_CLIENT_ID}
                onSuccess={responseGoogle}
                onFailure={failureGoogle}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login
