import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Games from "./pages/Games/Games";
import { Component } from "react";
import { Route, Routes } from "react-router-dom";

class App extends Component {
  // state = {
  //   view: true,
  // };

  // handleRoute = () => {
  //   this.setState((prevstate) => ({
  //     view: !prevstate.view,
  //   }));
  // };

  //inside App
  /* {this.state.view ? (
          <Register handleRoute={this.handleRoute} />
        ) : (
          <Login handleRoute={this.handleRoute} />
        )} */
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    );
  }
}

export default App;
