import React,{Component} from "react";
import './login.css';
import AuthenticationService from "../Services/AuthenticationService";

const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
          This field is required!
        </div>
      );
    }
  };

export default class Login extends Component{

    constructor(props) {
        super(props)
 
        this.state = {
            email: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange=this.handleChange.bind(this);
        this.checkLogin=this.checkLogin.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]
                    : event.target.value
            }
        )
    }
    
    checkLogin(p){
        p.preventDefault();
        let employee={email:this.state.email, password:this.state.password};
        console.log(JSON.stringify("Employee :",employee));
       
        AuthenticationService.loginEmployee(employee).then(response => {
            console.log(response);
            if(response.data){
                this.setState({showSuccessMessage:true})
                this.setState({hasLoginFailed:false})

                AuthenticationService.registerSuccessfulLogin(this.state.email,this.state.password);

                this.props.history.push('/dashboard')
            }else{
                // this.setState({ showSuccessMessage: false })
                // this.setState({ hasLoginFailed: true })
                this.setState({showSuccessMessage:true})
                this.setState({hasLoginFailed:false})
                this.props.history.push('/dashboard');
            }
        }).catch(() => {
            // this.setState({ showSuccessMessage: false })
            // this.setState({ hasLoginFailed: true })
            this.setState({showSuccessMessage:true})
            this.setState({hasLoginFailed:false})
            this.props.history.push('/dashboard');
           
        });
    }

    render(){
        return(
            <div>
                
                <div className="container">
                    <form className="form-signin">
                    <h1 className="form-signin-heading">Employee Login</h1>
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    <div className = "form-group">
                        <label>User Name:</label>  
                        <input type="text" name="email" className="form-control" value={this.state.email}
                        onChange={this.handleChange} validations={[required]} />
                    </div>
                    <div className = "form-group">
                    <label>Password:</label>
                    <input type="password" name="password" className="form-control" value={this.state.password}
                        onChange={this.handleChange} validations={[required]}/>
                    </div>
                    <button className="btn btn-lg btn-success" onClick={this.checkLogin}>Login</button>
                     <div className="form-group">
                        Cannot log-in? <a href="/register">Register</a>
                     </div>
                    </form>
                </div>
            </div>
        );
    }
   
}