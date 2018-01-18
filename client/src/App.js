import React, { Component } from "react";
import Nav from "./components/Nav";
import Articles from "./pages/Articles";
import SearchArticles from "./pages/SearchArticles";

class App extends Component {

  render() {
    return (
      <div>
        <Nav />
        <SearchArticles />
        <Articles />
      </div>
    );
  }
}

export default App;
