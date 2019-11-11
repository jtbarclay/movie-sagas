import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom'
import { compose } from 'redux'
import './App.css';
import MoviesList from '../MoviesList/MoviesList';
import { Button, Modal } from '@material-ui/core';
import Search from '../Search/Search';

class App extends Component {

  state = {
    offset: 0,
    currentPage: 0,
    open: false,
  };

  // get count for determing number of pages
  componentDidMount() {
    this.props.dispatch({ type: 'GET_COUNT' });
  }

  // handles the forwards and back navigation
  handlePageClick = (page) => {
    // console.log('link clicked: ', page);
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

  // handlers for search modal
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.history.push('/0');
    window.location.reload(false);
  };

  render() {

    // Generates MovieList components
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
        <header><h1>My Movies</h1></header>
        {/* adds movie pages once count is returned from server */}
        {/* {this.props.countReducer.count && movieLinks} */}
        {this.props.countReducer.count && moviePages}

        <Route exact path="/" render={() => (
          <Redirect to="/0" />
        )} />

        {/* nav buttons */}
        <Button
          variant='outlined'
          color='primary'
          size='large'
          disabled={this.state.currentPage === 0}
          onClick={() => { this.handlePageClick('prev') }}
        >Prev</Button>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          disabled={this.state.currentPage === Math.ceil(this.props.countReducer.count / 3) - 1}
          onClick={() => { this.handlePageClick('next') }}
        >Next</Button>
        <div>
          <Button onClick={this.handleOpen}>Search for more</Button>
          <Modal
            open={this.state.open}
            onClose={this.handleClose}
          >
            <Search 
              handleClose={this.handleClose}
            />
          </Modal>
        </div>
        {/* <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
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
