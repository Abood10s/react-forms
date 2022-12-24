import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Register />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
