import React, { Component } from 'react'
import { CardMedia, CardContent } from '@material-ui/core';

export class MovieHome extends Component {
    render() {
        return (
            <div>
                <CardMedia
                    onClick={() => this.props.setMovieDetails('details')}
                >
                    <img src={this.props.movie.poster}/>
                </CardMedia>
            </div>
        )
    }
}

export default MovieHome;
