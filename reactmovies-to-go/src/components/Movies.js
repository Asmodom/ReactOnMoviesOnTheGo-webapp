import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';


export default class Movie extends Component {

    state = { movies: [] };

    //reactlifecycle 
    componentDidMount() {
        this.setState({
            movies: [
                {id:1, title:"The Lord of the rings, the fellowship of the ring", runtime:142},
                {id:2, title:"The Lord of the rings, the two towers", runtime:150},
                {id:3, title:"The Lord of the rings, return of the king", runtime:189},

            ]
        })
    }

    render() {

        return <Fragment>
            <h2>Choose a movie</h2>
            <ul>
                {this.state.movies.map( (m) =>(
                    <li key={m.id}>
                        <Link to={`/movies/${m.id}`}>{m.title}</Link>
                    </li>
                ))}
            </ul>
        </Fragment>


    }
}   