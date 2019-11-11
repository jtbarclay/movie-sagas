import React, { Component } from 'react';
import { Paper } from '@material-ui/core';
import SearchForm from './SearchForm';

export class Search extends Component {
    render() {
        return (
            <div>
                <Paper>
                <h1>Search</h1>
                <SearchForm/>
                </Paper>
            </div>
        )
    }
}

export default Search;