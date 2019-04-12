import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import NoteDetails from "./components/notes/NoteDetails";
import CreateNote from "./components/notes/CreateNote";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import Roster from "./components/roster/Roster";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       
          <Navbar />
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/note/:id" exact component={NoteDetails} />
            <Route path="/signin" exact component={SignIn} />
            <Route path="/roster" exact component={Roster} />
            <Route path="/signup" exact component={SignUp} />
            <Route path="/create" exact component={CreateNote} />
          </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
