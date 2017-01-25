import React, { Component } from 'react';
import './Footer.css';
// import $ from 'jquery';

class Footer extends React.Component {

  // componentDidMount() {
  //   function scrollWin() {
  //       window.scroll(400, 400);
  //   };
  // }

  render() {

    return (
      <div className="Footer">
        <div className="Foot">
          <div className="para1">
          <p href="#" className="drible">dribbble</p>
          <p className="text">Show and tell for designers</p>
          <p className="text1">What are you working on? Dribbble is a community of designers sharing screenshots of their work, process, and projects.</p>
        </div>

        <div className="para2">
          <div className="para21">
          <p>About</p>
          <p>Help</p>
          <p>Contact</p>
          <p>Terms</p>
        </div>
          <div className="para21">
          <p>Guidelines</p>
          <p>Privacy</p>
          <p>Shop</p>
          <p>Testimonials</p>
        </div>
          <div className="para21">
          <p>Brand</p>
          <p>Advertise</p>
          <p>API</p>
          <p>Integrations</p>
        </div>
        </div>

        <div className="para3">
          <div className="para31">
          <p>Jobs for Designers</p>
          <p className="dad">GoDaddy</p>
          <p className="fan">FANTASY</p>
        </div>
        </div>

        </div>
        <div className="bot">
        <div className="para4">
          <p>Copyright © 2009–2017 Dribbble LLC. All screenshots © their respective owners. Shipped from Salem, Mass. USA.</p>
        </div>
        <div className="logodrib">
          <img className="imgstat" src="https://d13yacurqjgara.cloudfront.net/assets/ball-2acfbb9fdf187a34b07a7cc209d07025b39697eba6302c54942a556c10b3fa94.png"/>
          <div className="statlogo">
          <p className="numberstat">659,575,542,464</p>
          <p className="describstat">pixels dribbbled</p>
          </div>
        </div>
        {/* <button className="btnup" onclick="scrollWin()">Click to scroll!</button> */}
        </div>

      </div>

);
}
}

export default Footer;
