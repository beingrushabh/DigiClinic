import React from 'react';
import axios from 'axios';
import "../css/form.css";

class RegisterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            generalErr : "",
            username : "",
            usernameErr : "",
            userId : "",
            userIdErr : "",
            email : "",
            emailErr : "",
            password : "",
            passwordErr : "",
            confirmPassword : "",
            confirmPasswordErr : ""
        }
    }
    updateUserName = (e)=>{
        const username = e.target.value;
        this.setState(()=>({
            username,usernameErr:""
        }));
    }
    updateUserId = (e)=>{
        const userId = e.target.value;
        this.setState(()=>({
            userId,userIdErr:""
        }));
    }
    updateEmail = (e)=>{
        const email = e.target.value;
        this.setState(()=>({
            email,emailErr:""
        }));
    }
    updatePassword = (e)=>{
        const password = e.target.value;
        this.setState(()=>({
            password,passwordErr:""
        }));
    }
    updateConfirmPassword = (e)=>{
        const confirmPassword = e.target.value;
        this.setState(()=>({
            confirmPassword,confirmPasswordErr:""
        }));
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        let areErrs = false;
       const {username,userId,email,password,confirmPassword} = this.state;
       if(username.length<8){
           areErrs = true;
           this.setState(()=>({
               usernameErr : "username must have atleast 8 characters"
           }));
       }
       if(userId.length<8){
           areErrs = true;
           this.setState(()=>({
               userIdErr : "userId must have atleast 8 characters"
           }));
       }
       const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/;
       if(!emailRegex.test(email)){
           areErrs = true;
           this.setState(()=>({
               emailErr : "email address is invalid!!"
           }));
       }
       if(password.length<8){
           areErrs = true;
           this.setState(()=>({
               passwordErr : "password must have atlest 8 letters"
           }));
       }

       if(confirmPassword!==password){
           areErrs = true;
           this.setState(()=>({
               confirmPasswordErr : 'both password field should match'
           }));
       }
       if(!areErrs){
           const {username,userId,email,password} = this.state;
           const user = {
               username,userId,email,password
           };
           axios.post('/api/register',user).then((res)=>{
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
                    this.props.history.push("/login");
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
          <div id='register_form'>
              {this.state.generalErr && <div id='serverErr'>{this.state.generalErr}</div>}
              <form method='post' noValidate={true} onSubmit={this.handleSubmit}>
                  <label><div>Username:</div>
                      <input type='text' name='username' value={this.state.username} onChange={this.updateUserName}/>
                  </label>
                  {this.state.usernameErr && <div className='clientErr'>{this.state.usernameErr}</div>}
                  <label><div>UserId:</div>
                      <input type='text' name='userid' value={this.state.userId} onChange={this.updateUserId}/>
                  </label>
                  {this.state.userIdErr && <div className='clientErr'>{this.state.userIdErr}</div>}
                  <label><div>Email:</div>
                      <input type='email' name='email' value={this.state.email} onChange={this.updateEmail}/>
                  </label>
                  {this.state.emailErr && <div className='clientErr'>{this.state.emailErr}</div>}
                  <label><div>Password:</div>
                      <input type='password' name='username' value={this.state.password} onChange={this.updatePassword}/>
                  </label>
                  {this.state.passwordErr && <div className='clientErr'>{this.state.passwordErr}</div>}
                  <label><div>Confirm Password:</div>
                      <input type='password' name='confirm_password' value={this.state.confirmPassword} onChange={this.updateConfirmPassword}/>
                  </label>
                  {this.state.confirmPasswordErr && <div className='clientErr'>{this.state.confirmPasswordErr}</div>}
                  <button type='submit' id='register'>Register</button>
              </form>
          </div>
        );
    }
}

export default RegisterForm;