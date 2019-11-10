import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import './App.css';
import MoviesList from '../MoviesList/MoviesList';
import { Button } from '@material-ui/core';

class App extends Component {

  state = {
    offset: 0,
    currentPage: 0,
  };

  componentDidMount() {
    // this.props.dispatch({ type: 'GET_MOVIES', payload: { limit: 3, offset: this.state.offset } });
    this.props.dispatch({ type: 'GET_COUNT' });
  }

  // handlePageClick = () => {
  //   let selected = data.selected;
  //   let offset = Math.ceil(selected * 3);

  //   this.setState({ offset: offset, });
  //   this.props.dispatch({ type: 'GET_MOVIES', payload: { limit: 3, offset: this.state.offset } });

  // };

  handlePageClick = (page) => {
    console.log('link clicked: ', page);
    switch (page) {
      case 'prev':
        this.setState({
          currentPage: this.state.currentPage - 1,
        });
        return this.props.history.push(`/${this.state.currentPage - 1}`);
      case 'next':
        this.setState({
          currentPage: this.state.currentPage + 1,
        });
        return this.props.history.push(`/${this.state.currentPage + 1}`);
      default:
        return null;
    }
  }

  render() {

    const moviePages = [];
    // const movieLinks = [];

    for (let i = 0; i < (this.props.countReducer.count / 3); i++) {

      let path = `/${i}`;

      // movieLinks.push(
      //   <Link key={i} to={path} onClick={() => { this.handlePageClick(i) }}> {i} </Link>
      // )

      moviePages.push(
        <Route key={i} path={path} exact render={(props) => <MoviesList {...props} offset={i * 3} />} />
      )
    }

    return (
      <div className="App">
        <Button
          variant='outlined'
          color='primary'
          disabled={this.state.currentPage === 0}
          onClick={() => { this.handlePageClick('prev') }}
        >Prev</Button>
        <Button
          variant='outlined'
          color='primary'
          disabled={this.state.currentPage === Math.ceil(this.props.countReducer.count / 3) - 1}
          onClick={() => { this.handlePageClick('next') }}
        >Next</Button>
        {/* {this.props.countReducer.count && movieLinks} */}
        {this.props.countReducer.count && moviePages}
        <Route exact path="/" render={() => (
            <Redirect to="/0" />
          )} />
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => {
  return reduxState;
}

export default compose(
  connect(mapReduxStateToProps),
  withRouter
)(App);
