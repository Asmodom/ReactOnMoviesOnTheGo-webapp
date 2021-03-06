import './App.css';
import React, { Fragment } from 'react';
import { HashRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from 'react-router-dom';
import Movies from './components/Movies';
import Home from './components/Home';
import Admin from './components/Admin';
import OneMovie from './components/OneMovie';
import Genres from './components/Genres';
import OneGenre from './components/OneGenre';
import EditMovie from './components/EditMovie';

export default function App() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">
          Go watch a movie or serie
        </h1>
        <hr className="mb-3" />
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
                <Link to="/genres">Genres</Link>
              </li>
              <li className="list-group-item">
                <Link to="/admin/movie/0">Add movie</Link>
              </li>
              <li className="list-group-item">
                <Link to="/admin">Manage Catalogue</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="col-md-10">
          <Switch>
            <Route path="/movies/:id" component={OneMovie}/>
            <Route exact path="/movies">
              <Movies />
            </Route>
            <Route exact path="/genres">
              <Genres />
            </Route>
            <Route path="/genre/:id" component={OneGenre}/>

            <Route path="/admin/movie/:id" component={EditMovie}/>

            <Route exact path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>

    </div>
  );
}