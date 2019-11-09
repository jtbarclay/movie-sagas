import React, { Component } from 'react'
import { Card } from '@material-ui/core';
import MovieHome from '../MovieHome/MovieHome';

export class MoviesItem extends Component {
    render() {
        return (
            <Card>
                <MovieHome
                    movie={this.props.movie}
                />
            </Card>
        )
    }
}

export default MoviesItem;
