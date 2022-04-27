import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

const LoginComponent = (props) => {
    const [username, setUsername] = useState('admin');
    const [password, setPassword] = useState('');
    const [hasLoginFailed, setHasLoginFailed] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    function loginClicked() {
        //debayan,dummy
        // if(username==='admin' && password==='password'){
        //     AuthenticationService.registerSuccessfulLogin(username,password)
        //     //this.props.history.push(`/welcome/${this.state.username}`)
        //     props.navigate(`/seller/${username}`)
        //     setShowSuccessMessage(true)
        //     setHasLoginFailed(false)
        // }
        // else {
        //     setShowSuccessMessage(false)
        //     setHasLoginFailed(true)
        // }

        AuthenticationService
        .executeBasicAuthenticationService(username, password)
        .then(() => {
            AuthenticationService.registerSuccessfulLogin(username,password)
            props.navigate(`/seller/${username}`)
        }).catch( () =>{
            setShowSuccessMessage(false)
            setHasLoginFailed(true)
        })
    }


    return(
        <div>
        <h1>Login</h1>
        <div className="container">
            {hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
            {showSuccessMessage && <div>Login Sucessful</div>}
            
           
                <div class="row space">
                    <div class="col text-right">
                        User Name: 
                    </div>
                    <div class="col text-left">
                        <input type="text" name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </div>
                </div>

                <div class="row space">
                    <div class="col text-right">
                    Password: 
                    </div>
                    <div class="col text-left">
                    <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </div>
                </div>
                      
            
                <div class="space">
                    <button className="btn btn-success" onClick={loginClicked}>Login</button>
                </div>
        </div>
    </div>
    )
}

export default LoginComponent