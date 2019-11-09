import React, { Component } from 'react'
import { CardMedia, CardContent } from '@material-ui/core';

export class MovieHome extends Component {
    render() {
        return (
            <div>
                <CardMedia>
                    <img src={this.props.movie.poster}/>
                </CardMedia>
                <CardContent>
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </CardContent>
            </div>
        )
    }
}

export default MovieHome;
