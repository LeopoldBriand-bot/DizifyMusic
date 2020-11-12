import React, { Component } from 'react';
import RecentlyListened from '../component/listened-recently.component';



class Home extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <RecentlyListened></RecentlyListened>
      </div>
    )
  }
}

export default Home
