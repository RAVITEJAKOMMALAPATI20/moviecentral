import React, { Component } from 'react';
import './App.css';
import './css/Application.scss'
import Navigation from "./components/Navigation";
import LogInSignIn from "./components/LogInSignIn";
import Home from './components/Home'
import LogninPage from "./components/LogninPage";
import MovieCard from "./components/MovieCard";
import Search from "./components/Search";
import {BrowserRouter} from "react-router-dom";
import WebRoutes from './components/WebRoutes'
class App extends Component {
  render() {
    return (
        <BrowserRouter>
      <div className="App">
          <header className={"Header"}>
              <Navigation/>
              <Search/>
          </header>

          <WebRoutes/>
      </div>
        </BrowserRouter>
    );
  }
}

export default App;
