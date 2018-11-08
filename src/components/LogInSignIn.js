import React, { Component } from 'react';


class LogInSignIn extends Component {



    constructor(props){
        super(props);
        this.state={
            login:{
                username:"",
                password:"",
                usertype:""
            },
            signup:{
                username: "",
                password: "",
                email:"",
                details:{}
            }
        }
    }
    render() {
        return(
            <form>

            </form>
        )
    }
}

export default LogInSignIn;