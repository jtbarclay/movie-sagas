import React, { Component } from 'react'
import { Card } from '@material-ui/core';
import MovieHome from '../MovieHome/MovieHome';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieEdit from '../MovieEdit/MovieEdit';
import './MoviesItem.css';

export class MoviesItem extends Component {
    state = {
        movieCard: 'home',
    }

    setMovieDetails = (newState) => {
        // console.log('setMovieDetails hit', newState);
        this.setState({
            movieCard: newState,
        })
    }

    render() {
        return (
            <Card>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                {(() => {switch (this.state.movieCard) {
                    case 'home':
                        return <MovieHome movie={this.props.movie} setMovieDetails={this.setMovieDetails}/>;
                    case 'details':
                        return <MovieDetails movie={this.props.movie} setMovieDetails={this.setMovieDetails}/>;
                    case 'edit':
                        return <MovieEdit movie={this.props.movie} setMovieDetails={this.setMovieDetails}/>;
                    default:
                        return null;
                }})()}
            </Card>
        )
    }
}

export default MoviesItem;
