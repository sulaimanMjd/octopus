import { GoogleLogin } from 'react-google-login'

const clientId = "461739123177-pnhhsldmp53jqdjtdtthfats24bajn2n.apps.googleusercontent.com"

function Login() {
  
  const onSuccess = (res) => {
    console.log("Login SUCCESS! Current user: ", res.profileObj)
  }
  const onFailure = (res) => {
    console.log("Login FAILED! res: ", res)
  }
  
  return(
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single-host-origin'}
        isSignedIn={true}
      />
    </div>
  )
}
export default Login;