import React, { Component } from 'react'
import { CardMedia, CardContent, CardHeader } from '@material-ui/core';

export class MovieHome extends Component {
    render() {
        return (
            <div>
                <CardHeader></CardHeader>
                <CardMedia
                    onClick={() => this.props.setMovieDetails('details')}
                >
                    <img src={this.props.movie.poster} alt={this.props.movie.title}/>
                </CardMedia>
                <CardContent>
                    <h2>{this.props.movie.title}</h2>
                </CardContent>
            </div>
        )
    }
}

export default MovieHome;
