import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, CardMedia, CardHeader, CardContent } from '@material-ui/core'

export class SearchResults extends Component {
    render() {
        return (
            <div>
                <Card
                    onClick={this.props.onClick}
                >
                    <CardHeader></CardHeader>
                    <CardMedia>
                        <img
                            src={`https://image.tmdb.org/t/p/w92${this.props.movie.poster_path}`}
                            alt={this.props.movie.title}
                        />
                    </CardMedia>
                    <CardContent>
                        <h2>{this.props.movie.title}</h2>
                        <p>{this.props.movie.overview}</p>
                    </CardContent>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default connect(mapStateToProps)(SearchResults);
