import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import MoviesItem from '../MoviesItem/MoviesItem';

export class MoviesList extends Component {

    componentDidMount() {
        this.props.dispatch({ type: 'GET_MOVIES' })
    }

    render() {
        return (
            <div>
                <Grid
                    container
                    spacing={3}
                >
                    {this.props.reduxState.moviesReducer.map((movie) => (
                        <Grid
                            item
                            sm={4}
                        >
                            <MoviesItem
                                movie={movie}
                            />
                        </Grid>
                    ))}
                </Grid>
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(MoviesList);
