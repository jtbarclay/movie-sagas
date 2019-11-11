import React, { Component } from 'react'
import { TextField, Button } from '@material-ui/core'
import { connect } from 'react-redux';

export class SearchForm extends Component {

    state = {
        movieTitle: '',
    }

    handleInput = (event) => {
        this.setState({
            movieTitle: event.target.value,
        })
    }

    handleClick = () => {
        this.props.dispatch({ type: 'GET_SEARCH', payload: this.state.movieTitle });
    }

    render() {
        return (
            <div>
                <TextField
                    variant="outlined"
                    label="Movie Title"
                    onChange={this.handleInput}
                    value={this.state.movieTitle}
                />
                <Button
                    variant="outlined"
                    onClick={this.handleClick}
                >Search</Button>
                <pre>{JSON.stringify(this.state, null, 2)}</pre>
                <pre>{JSON.stringify(this.props.searchReducer, null, 2)}</pre>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(SearchForm);
