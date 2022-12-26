import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Component } from "react";
class App extends Component {
  state = {
    view: true,
  };

  handleRoute = () => {
    this.setState((prevstate) => ({
      view: !prevstate.view,
    }));
  };

  render() {
    return (
      <div className="App">
        {this.state.view ? (
          <Register handleRoute={this.handleRoute} />
        ) : (
          <Login handleRoute={this.handleRoute} />
        )}
      </div>
    );
  }
}

export default App;
