import React, { useState } from "react";



const Register = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const handleRegister = (e)=>{
        e.preventDefault();
    }

    return(
        <div>    
                <div className="container">
                    <form className="form-signin">
                    <h1 className="form-signin-heading">Employee Registration</h1>
                    <div className="form-register-main">
                        <div className = "form-group">
                            <label>User Name:</label>  
                            <input type="text" name="email" className="form-control" value={email}
                            onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                        <label>Password:</label>
                        <input type="password" name="password" className="form-control" 
                            style={{'margin':0}}
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}} />
                        </div>

                        <div className = "form-group">
                            <label>Confirm Password:</label>
                            <input type="text" name="password" className="form-control" value={confirmPass}
                                onChange={(e)=>{setConfirmPass(e.target.value)}} />
                        </div>
                    
                    <button className="btn btn-lg btn-success" onClick={handleRegister}>Register</button>
                    </div>
                     <div className="form-group">
                        Already Registered? <a href="/login">Login</a>
                     </div>
                    </form>
                </div>
            </div>
    )

}

export default Register;