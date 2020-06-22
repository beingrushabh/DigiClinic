import React from "react";

class LogOut extends React.Component {
    constructor(props) {
        super(props);
    }
    handleLogOut = (e)=>{
        fetch("/api/logout",{credentials:"include"}).then(()=>{
            sessionStorage.setItem('loggedIn',false);
            this.props.history.push("/");
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.handleLogOut}>LogOut</button>
            </div>
        );
    }
}

export default LogOut;