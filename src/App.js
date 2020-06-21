import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DisplayBlog from "./components/DisplayBlog";
import TheBlog from "./components/TheBlog";
import News from "./components/News";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";
import LogOut from "./components/LogOut";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Blog">
            <TheBlog />
          </Route>
          <Route path="/Blogs">
            <DisplayBlog />
          </Route>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path='/login'>
            <LoginForm />
          </Route>
          <Route path='/register' component={RegisterForm} />
          <Route path='/logout' component={LogOut} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
