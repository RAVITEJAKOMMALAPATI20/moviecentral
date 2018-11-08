import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

class LogninPage extends Component {


     responseFacebook = (response) => {
        console.log(response);
    }
    render() {
        return (
            <div >
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />


                <FacebookLogin
                    appId="1088597931155576"
                    autoLoad={true}
                    fields="name,email,picture"
                    onClick={this.componentClicked}
                    callback={this.responseFacebook} />
            </div>
        );
    }
}

export default LogninPage;
