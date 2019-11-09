import React, { Component } from 'react'
import { Card, CardContent, CardMedia } from '@material-ui/core';

export class MoviesItem extends Component {
    render() {
        return (
            <Card>
                <CardMedia>
                    <img src={this.props.movie.poster}/>
                </CardMedia>
                <CardContent>
                    <h2>{this.props.movie.title}</h2>
                    <p>{this.props.movie.description}</p>
                </CardContent>
            </Card>
        )
    }
}

export default MoviesItem;
