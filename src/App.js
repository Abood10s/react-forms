import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Component } from "react";
class App extends Component {
  state = {
    flag: true,
  };

  handleRoute = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };

  render() {
    return (
      <div className="App">
        {this.state.flag ? (
          <Register handleRoute={this.handleRoute} />
        ) : (
          <Login handleRoute={this.handleRoute} />
        )}
      </div>
    );
  }
}

export default App;
