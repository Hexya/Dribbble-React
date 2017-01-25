import React, { Component } from 'react';
import './Header.css';
// import $ from 'jquery';

class Header extends React.Component {

  // componentDidMount() {
  //   $('.dropdown-button').dropdown({
  //     inDuration: 300,
  //     outDuration: 225,
  //     constrain_width: false,
  //     hover: true,
  //     gutter: 0,
  //     belowOrigin: false,
  //     alignment: 'left'
  //   }
  // );
  // $('.dropdown-button').dropdown('open');
  //  $('.dropdown-button').dropdown('close');
  // }

  render() {
    // const style = {
    //   "display": "flex",
    // }
    return (
      <div className="Header">
        {/* style={{"display": "flex"}} */}
        {/* <h1 style={style}>dribbble</h1> */}

        {/* <ul className="list">
          <li className="dribbble">dribbble</li>
          <li>Shots</li>
          <li>Designers</li>
          <li>Teams</li>
          <li>Community</li>
          <li>Jobs</li>
          <li>•••</li>
          <li ><input className="searchBar" type="text" placeholder="Seach" /></li>
        </ul> */}


        <ul id="headMenu">

          <li href="#" className="dribbble">dribbble</li>
          <li><a className="titleHead" href="#">Shots</a>
          <ul>
            <li><a href="#" className="backLiBlack">Popular</a></li>
            <li><a href="#" className="backLiBlack">Recents</a></li>
            <li><a href="#" className="backLiBlack">Debuts</a></li>
            <li><a href="#" className="backLiBlack">Teams</a></li>
            <li><a href="#" className="backLiBlack line">Playoffs</a></li>
            <li><a href="#" className="backLiBlack line"><img className="map" src="https://cdn4.iconfinder.com/data/icons/miu/24/map-location-pin-map-marker-glyph-128.png"/>Paris Area</a></li>
            <li><a href="#" className="backLiBlack">Highlights</a></li>
            <li><a href="#" className="backLiBlack">Projects</a></li>
            <li><a href="#" className="backLiBlack">Goods by Designers</a></li>
          </ul>
        </li>
        <li><a className="titleHead" href="#">Designers</a>
        <ul>
          <li><a href="#" className="backLiBlack">All</a></li>
          <li><a href="#" className="backLiBlack line">For Hire</a></li>
          <li><a href="#" className="backLiBlack"><img className="map" src="https://cdn4.iconfinder.com/data/icons/miu/24/map-location-pin-map-marker-glyph-128.png"/>Paris Area</a></li>
        </ul>
        </li>
        <li><a className="titleHead" href="#">Teams</a>
        <ul>
        <li><a href="#" className="backLiBlack">All</a></li>
        <li><a href="#" className="backLiBlack">Hiring Designers</a></li>
        <li><a href="#" className="backLiBlack line">Design Teams for Hire</a></li>
        <li><a href="#" className="backLiBlack line"><img className="map" src="https://cdn4.iconfinder.com/data/icons/miu/24/map-location-pin-map-marker-glyph-128.png"/>Paris Area</a></li>
        <li><a href="#" className="backLiBlack">Add design your Team</a></li>
        </ul>
        </li>
        <li><a className="titleHead" href="#">Community</a>
        <ul>
        <li><a href="#" className="backLiBlack line"><img className="map" src="https://cdn4.iconfinder.com/data/icons/miu/24/map-location-pin-map-marker-glyph-128.png"/>Paris Area</a></li>
        <li><a href="#" className="backLiBlack">All places</a></li>
        <li><a href="#" className="backLiBlack line">Meetups</a></li>
        <li><a href="#" className="backLiBlack">Stories</a></li>
        <li><a href="#" className="backLiBlack">Podcast</a></li>
        <li><a href="#" className="backLiBlack line">Testimonials</a></li>
        <li><a href="#" className="backLiBlack">Guidelines</a></li>
        </ul>
        </li>
        <li><a className="titleHead" href="#">Jobs</a>
        <ul>
        <li><a href="#" className="backLiBlack">All</a></li>
        <li><a href="#" className="backLiBlack">Near You</a></li>
        <li><a href="#" className="backLiBlack">Remote / Anywhere</a></li>
        <li><a href="#" className="backLiBlack line">Teams Hiring</a></li>
        <li><a href="#" className="backLiBlack">Post a Job</a></li>
        </ul>
        </li>
        <li><a className="titleHead" className="point" href="#">•••</a>
        <ul>
        <li><a href="#" className="backLiBlack">About</a></li>
        <li><a href="#" className="backLiBlack">Shop</a></li>
        <li><a href="#" className="backLiBlack line">Support</a></li>
        <li><a href="#" className="backLiBlack">Buckets</a></li>
        <li><a href="#" className="backLiBlack">Colors</a></li>
        <li><a href="#" className="backLiBlack">Tags</a></li>
        <li><a href="#" className="backLiBlack line">Training</a></li>
        <li><a href="#" className="backLiBlack">Twitter</a></li>
        <li><a href="#" className="backLiBlack">Facebook</a></li>
        <li><a href="#" className="backLiBlack">Integrations</a></li>
        </ul>
        </li>
          <li ><input className="searchBar" type="text" placeholder="Seach" /></li>
        </ul>



      </div>
    );
  }
}

export default Header;
