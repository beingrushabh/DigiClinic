import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import DisplayBlog from "./components/DisplayBlog";
import TheBlog from "./components/Blogs/TheBlog";
import News from "./components/News/News";
import PostBlog from "./components/Blogs/PostBlog";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/PostBlog">
            <PostBlog />
          </Route>
          <Route path="/News">
            <News />
          </Route>
          <Route path="/Blog">
            <TheBlog />
          </Route>
          <Route path="/Blogs">
            <DisplayBlog />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
