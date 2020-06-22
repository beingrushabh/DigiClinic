import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DisplayBlog from "./components/Blogs/DisplayBlog";
import TheBlog from "./components/Blogs/TheBlog";
import News from "./components/News/News";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import LogOut from "./components/LogOut";
import PostBlog from "./components/Blogs/PostBlog";
import ProtactedRoute from "./components/ProtactedRoute";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <ProtactedRoute path='/PostBlog' component={PostBlog} />
          <ProtactedRoute path='/News' component={News} />
          <ProtactedRoute path='/Blog' component={TheBlog} />
          <ProtactedRoute path='/Blogs' component={DisplayBlog} />
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/logout' component={LogOut} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
