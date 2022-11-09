import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthenticationService from "../Services/AuthenticationService";
const Register = ()=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [designation,setDesignation]=useState("");
    const [department,setDepartment]=useState("");
    const [gender,setGender]=useState('');
    const [dob,setDob]=useState("");
    const [doj,setDoj]=useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [passwordFlag, setPasswordFlag] = useState(false);
    const history = useHistory();
    

    const handleRegister = (p)=>{
        p.preventDefault();

        if(password===confirmPass){
        let employee={email:email, password:password, lName:lname,fName:fname,designation:designation,dept:department,gender:gender,dob:dob,doj:doj};
        console.log(JSON.stringify(employee));

        const registerEmployee = async()=>{
            const res = await axios.post('http://localhost:8082/rockblack/api/Employee',employee);
            console.log(res);
            if(res.data){
                AuthenticationService.registerSuccessfulLogin(email,password);
                history.push("/dashboard");
            }
            else{
                console.log("Error, Unable to Register");
            }
        }
       
        registerEmployee();

        }
        else{
            setPasswordFlag(true);
            setPassword("");
            setConfirmPass("");
        }
    }

    return(
        <div>   {passwordFlag && <h3 style={{'color':'red'}}>Password does not match</h3>}
                <div className="container">
                    <form className="form-signin">
                    <h1 className="form-signin-heading">Employee Registration</h1>
                    <div className="form-register-main">
                        <div className = "form-group">
                            <label>Email:</label>  
                            <input type="text" name="email" className="form-control" value={email}
                            onChange={(e)=>{setEmail(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                            <label>Fisrt Name:</label>  
                            <input type="text" name="email" className="form-control" value={fname}
                            onChange={(e)=>{setFname(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                            <label>Last Name:</label>  
                            <input type="text" name="email" className="form-control" value={lname}
                            onChange={(e)=>{setLname(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                            <label>Designation:</label>  
                            <input type="text" name="email" className="form-control" value={designation}
                            onChange={(e)=>{setDesignation(e.target.value)}} />
                        </div>
                        
                        <div className = "form-group">
                            <label>Department:</label>  
                            <input type="text" name="email" className="form-control" value={department}
                            onChange={(e)=>{setDepartment(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                            <label>Gender:</label>  
                            <input type="text" name="email" className="form-control" value={gender}
                            onChange={(e)=>{setGender(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                            <label>Date of birth:</label>  
                            <input type="text" name="email" className="form-control" value={dob}
                            onChange={(e)=>{setDob(e.target.value)}} />
                        </div>
                        <div className = "form-group">
                            <label>Date of joining:</label>  
                            <input type="text" name="email" className="form-control" value={doj}
                            onChange={(e)=>{setDoj(e.target.value)}} />
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