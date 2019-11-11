import React, { Component } from 'react'
import { TextField, Button, Grid } from '@material-ui/core'
import { connect } from 'react-redux';
import { SearchResults } from './SearchResults';
import './Search.css';
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
        this.props.dispatch({ type: 'GET_CONFIG' });
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
                    size='large'
                >Search</Button>
                <img src='https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png' alt='Powered by TMDb' />
                <Grid
                    container
                    spacing={3}
                >
                    {this.props.configReducer.images && this.props.searchReducer.results && this.props.searchReducer.results.map((movie) => (
                        <Grid
                            key={movie.id}
                            item
                            sm={4}
                        >
                            <SearchResults
                                key={movie.id}
                                movie={movie}
                                onClick={() => {
                                    if (window.confirm("Add this movie?")) {
                                        this.props.dispatch({ type: 'POST_MOVIE', payload: movie });
                                        this.props.handleClose();
                                    }
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
                {/* <pre>{JSON.stringify(this.state, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(this.props.configReducer, null, 2)}</pre> */}
                {/* <pre>{JSON.stringify(this.props.searchReducer, null, 2)}</pre> */}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}

export default connect(mapReduxStateToProps)(SearchForm);
