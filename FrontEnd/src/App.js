import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { Login } from './Components/Login';
import HomeTask from './Components/HomeTask';
import NewTask from './Components/NewTask';
import ProfileDrawer from './Components/ProfileDrawer';


export class App extends Component {


     

  render() {


  const LoginView = () => (
          <Login/>
      );

    const HomeView = () => (
        <HomeTask />
    );
    const DialogView = () => (
        <NewTask />
    );

    const ProfileView = () => (
        <ProfileDrawer />
    );

        return (
            <Router>
                <div className="App">
                 
                    <div>
                    <Route exact path="/" component={LoginView}/>
                    <Route exact path="/HomeTask" component={HomeView}/>
                    <Route exact path="/Dialog" component={DialogView}/>
                    <Route exact path="/Profile" component={ProfileView}/>
                    </div>
                </div>
            </Router>
        );
    }

}

export default App;