import React from 'react';
import axios from "axios";
import "../css/form.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generalErr : "",
            userId : "",
            userIdErr : "",
            password : "",
            passwordErr:""
        }
    }

    updateUserId = (e)=>{
        const userId = e.target.value;
        this.setState(()=>({
            userId,userIdErr:""
        }));
    }
    updatePassword = (e)=>{
        const password = e.target.value;
        this.setState(()=>({
            password,passwordErr:""
        }));
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        const{userId,password} = this.state;
        let areErrs = false;
        if(userId.length<8){
            areErrs = true;
            this.setState(()=>({
                userIdErr:"User ID must have atleast 8 character"
            }));
        }
        if(password.length<8){
            areErrs = true;
            this.setState(()=>({
                passwordErr:"password must have atleast 8 latters"
            }));
        }
        if(!areErrs){
           const user = {
               userId : this.state.userId,
               password : this.state.password
           };
           axios.post('/api/login',user).then((res)=>{
               const data = res.data;
               if(data.err){
                   const err = {};
                   const keys = Object.keys(data.err);
                   for(let key of keys){
                       err[key] = data.err[key];
                   }
                   this.setState(()=>({
                       ...err
                   }));
               }else{
                   sessionStorage.setItem('loggedIn',true);
                   if(this.props.location.state){
                       this.props.history.push(this.props.location.state);
                   }else{
                       this.props.history.push("/");
                   }
               }
           }).catch((e)=>{
              this.setState(()=>({
                  generalErr : e.message
              }));
           });
        }

    }
    render(){
        return(
          <div id="login_form">
              {this.state.generalErr && <div id='serverErr'>{this.state.generalErr}</div>}
              <form method="post" noValidate={true} onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                  <label>UserId:
                      <input type="text" name='userId' className="form-control" value={this.state.userId} onChange={this.updateUserId}/>
                  </label>
                  {this.state.userIdErr &&<div className='clientErr'>{this.state.userIdErr}</div>}
                  </div>
                  <div className='form-group'>
                  <label>Password:
                      <input type='password' name='password' className="form-control"  value={this.state.password} onChange={this.updatePassword} />
                  </label>
                  {this.state.passwordErr && <div className='clientErr'>{this.state.passwordErr}</div> }
                  </div>
                  <button id='logIn' type='submit'>Log In</button>
              </form>
          </div>
        );
    }
}

export default Login;