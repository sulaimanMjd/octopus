import { GoogleLogin } from 'react-google-login'

const clientId = "461739123177-pnhhsldmp53jqdjtdtthfats24bajn2n.apps.googleusercontent.com"

function Logout() {
  
  const onSuccess = () => {
    console.log("Logout Successfull!")
  }
  return(
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  )
}

export default Logout;