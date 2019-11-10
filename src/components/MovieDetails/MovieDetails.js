import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export class MovieDetails extends Component {
    render() {
        return (
            <div>
                <p>Details</p>
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={() => this.props.setMovieDetails('edit')}
                >Edit</Button>
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={() => this.props.setMovieDetails('home')}
                >Back</Button>
            </div>
        )
    }
}

export default MovieDetails;
