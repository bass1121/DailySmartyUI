import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from "./searchBar";
import ResultsPost from "./resultsPosts";

import { connect } from "react-redux";
import * as actions from "../actions";

export default class Results extends Component {

    handleSearchBarSubmit(query) {
        this.props.fetchPostsWithQuery(query);
    }

    render() {
        return (
            <div>         
                <Logo size={55} />
                <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)} />
                <ResultsPost />
            </div>
        );
    }
}