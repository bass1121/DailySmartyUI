import React, { Component } from 'react';

import Logo from "./logo";
import RecentPosts from './recentPosts';
import SearchBar from "./searchBar"
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <div>
          <Logo />
          <SearchBar />
          <RecentPosts />
        </div>
      </div>
    );
  }
}