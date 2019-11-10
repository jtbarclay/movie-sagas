import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Button, TextField, CardContent } from '@material-ui/core'

export class MovieEdit extends Component {

    state = {
        newDetails: this.props.movie,
    }

    inputHandler = (event, property) => {
        this.setState({
            newDetails: {
                ...this.state.newDetails,
                [property]: event.target.value,
            }
        })
    }

    editHandler = () => {
        this.props.dispatch({ type: 'PUT_MOVIES', payload: this.state.newDetails });
        this.props.setMovieDetails('details');
    }

    render() {
        return (
            <div>
                <CardContent>
                    {/* <pre>{JSON.stringify(this.state.newDetails, null, 2)}</pre> */}
                    <div>
                        <TextField
                            variant="outlined"
                            label="Title"
                            fullWidth
                            defaultValue={this.props.movie.title}
                            onChange={(event) => this.inputHandler(event, 'title')}
                        />
                    </div><div>
                        <TextField
                            variant="outlined"
                            label="Description"
                            fullWidth
                            multiline
                            defaultValue={this.props.movie.description}
                            onChange={(event) => this.inputHandler(event, 'description')}
                        />
                    </div>
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
                </CardContent>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(MovieEdit);
