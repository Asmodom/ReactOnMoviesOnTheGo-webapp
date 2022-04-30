import './App.css';
import React, {Fragment} from 'react';
import {HashRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Movies from './components/Movies';
import Home from './components/Home';
import Admin from './components/Admin';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">
          Go watch a movie or serie
        </h1>
        <hr className="mb-3"/>
      </div>

      <div className="row">
        <div className="col-md-2">
          <nav>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-group-item">
                <Link to="/movies">Movies</Link>
              </li>
              <li className="list-group-item">
                <Link to="/admin">Manage Catalogue</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-10">
          <Switch>
            <Route path="/movies/:id">
              <Movie/>
            </Route>
            <Route exact path="/movies">
              <Movies/>
            </Route>
            <Route exact path="/admin">
              <Admin/>
            </Route>
            <Route exact path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </div>

    </div>
  );
}


function Movie(){
  let {id} = useParams();
  return <h2>Movie id {id}</h2>
}