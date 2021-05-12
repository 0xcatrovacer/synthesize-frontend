import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from "axios"

const Login = () => {

    const responseGoogle = (res) => {
        const access_token = res.accessToken
        const email = res.profileObj.email

        axios.post(`http://localhost:8000/auth/oauthlogin`, {
            access_token,
            email
        }).then((res) => {
            if (res.data.ok) {
                localStorage.setItem('token', res.tokenId)
                console.log(res.data)
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
                buttonText="Sign in with Google"
                clientId="651777357198-bploucn8m5u37f1o4ie2kqe2bkbkk8fv.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={failureGoogle}
                isSignedIn={true}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}

export default Login
