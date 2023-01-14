import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Games from "./pages/Games/Games";
import PageNotFound from "./pages/404/PageNotFound";
import { Component } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import User from "./components/Users/User";

class App extends Component {
  state = {
    isAuthentecated: false,
    isAdmin: false,
    theme: "light",
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) this.setState({ isAuthentecated: true });
  }
  login = () => {
    this.setState({ isAuthentecated: true });
  };
  logout = () => {
    localStorage.clear();
    this.setState({ isAuthentecated: false });
  };
  setDarkTheme = () => {
    this.setState({ theme: "dark" });
    document.body.style.backgroundColor = "#454545";
    document.body.style.color = "#D8D8D8";
  };
  setLightTheme = () => {
    this.setState({ theme: "light" });
    document.body.style.backgroundColor = "#F9F9F9";
    document.body.style.color = "#000";
  };
  render() {
    return (
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {this.state.isAuthentecated ? (
                  <Navigate to="/games" />
                ) : (
                  <Login
                    login={this.login}
                    isAuthentecated={this.state.isAuthentecated}
                  />
                )}
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                {this.state.isAuthentecated ? (
                  <Navigate to="/games" />
                ) : (
                  <Register isAdmin={this.state.isAdmin} login={this.login} />
                )}
              </>
            }
          />
          <Route
            element={
              <ProtectedRoute isAuthentecated={this.state.isAuthentecated} />
            }
          >
            <Route
              path="/games"
              element={
                <Games
                  isAuthentecated={this.state.isAuthentecated}
                  logout={this.logout}
                  setDarkTheme={this.setDarkTheme}
                  setLightTheme={this.setLightTheme}
                  theme={this.state.theme}
                />
              }
            />
          </Route>
          <Route path="/games/user/:id" element={<User />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
