import React, { Component } from 'react';
import './Sort.css';
// import $ from 'jquery';

class Sort extends React.Component {

  render() {

    return (
      <div className="Sort">

        <ul id="menu">
          <li><a className="title" href="#">Popular</a>
          <ul>
            <li><a href="#" className="backLi">Recent</a></li>
            <li><a href="#" className="backLi">Most viewed</a></li>
            <li><a href="#" className="backLi">Most commented</a></li>
          </ul>
        </li>
        <li><a className="title" href="#">Shots</a>
        <ul>
          <li><a href="#" className="backLi">Debuts</a></li>
          <li><a href="#" className="backLi">Team Shots</a></li>
          <li><a href="#" className="backLi">Playoffs</a></li>
          <li><a href="#" className="backLi">Rebounds</a></li>
          <li><a href="#" className="backLi">Animated GIFs</a></li>
          <li><a href="#" className="backLi">Shots with Attachments</a></li>
        </ul>
      </li>
      <li><a className="title" href="#">Now</a>
      <ul>
        <li><a href="#" className="backLi">This Past Week</a></li>
        <li><a href="#" className="backLi">This Past Month</a></li>
        <li><a href="#" className="backLi">This Past Year</a></li>
        <li><a href="#" className="backLi">All Time</a></li>
      </ul>
    </li>
  </ul>

</div>
);
}
}

export default Sort;
