import React, { Component } from 'react'
import { Button } from '@material-ui/core'

export class MovieEdit extends Component {
    render() {
        return (
            <div>
                <p>Edit</p>
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={() => this.props.setMovieDetails('details')}
                >Back</Button>
            </div>
        )
    }
}

export default MovieEdit;
