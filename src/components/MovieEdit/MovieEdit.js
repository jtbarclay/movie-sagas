import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, TextField } from '@material-ui/core'

export class MovieEdit extends Component {

    state = {
        newDetails: this.props.movie,
    }

    inputHandler = (event, field) => {
        this.setState({
            newDetails: {
                ...this.state.newDetails,
                [field]: event.target.value,
            }
        })
    }

    editHandler = () => {
        this.props.dispatch({ type: 'PUT_MOVIES', payload: this.state.newDetails});
        this.props.setMovieDetails('details');
    }

    render() {
        return (
            <div>
                <p>Edit</p>
                <pre>{JSON.stringify(this.state.newDetails, null, 2)}</pre>
                <TextField
                    variant="outlined"
                    label="Title"
                    defaultValue={this.props.movie.title}
                    onChange={(event) => this.inputHandler(event, 'title')}
                />
                <TextField
                    variant="outlined"
                    label="Description"
                    multiline
                    defaultValue={this.props.movie.description}
                    onChange={(event) => this.inputHandler(event, 'description')}
                />
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={() => this.props.setMovieDetails('details')}
                >Back</Button>
                <Button 
                    variant='outlined' 
                    color='primary' 
                    onClick={this.editHandler}
                >Save</Button>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
  }

export default connect(mapReduxStateToProps)(MovieEdit);
