import Login from "./pages/Login/Login";

import Register from "./pages/Register/Register";
import Games from "./pages/Games/Games";
import PageNotFound from "./pages/404/PageNotFound";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games" element={<Games />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
