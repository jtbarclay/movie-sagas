import React, { Component } from 'react'
import { Button, CardContent } from '@material-ui/core'

export class MovieDetails extends Component {
    render() {
        return (
            <div>
                <CardContent>
                <h2>{this.props.movie.title}</h2>
                <p>{this.props.movie.description}</p>
                <h3>Genres:</h3>
                {this.props.movie.genres.map((genre) => (
                    <div>{genre}</div>
                ))}
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={() => this.props.setMovieDetails('home')}
                >Back</Button>
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={() => this.props.setMovieDetails('edit')}
                >Edit</Button>
                </CardContent>
            </div>
        )
    }
}

export default MovieDetails;
