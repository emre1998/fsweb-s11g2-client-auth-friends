import React from "react";
import "./App.css";
import AuthContextProvider from "./contexts/AuthContext";
import LoginForm from "./LoginForm";
import Header from "./Header";
import FriendsList from "./FriendsList";
import Friend from "./Friend";
import AddFriend from "./AddFriend";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/login">
              <LoginForm />
            </Route>
            <PrivateRoute path="/friends-list/:id">
              <Friend />
            </PrivateRoute>
            <PrivateRoute path="/friends-list">
              <FriendsList />
            </PrivateRoute>
            <PrivateRoute path="/add-friend">
              <AddFriend />
            </PrivateRoute>
            <PrivateRoute path="/">
              <FriendsList />
            </PrivateRoute>
            <PrivateRoute path="/friends-add">{/* // TODO */}</PrivateRoute>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
