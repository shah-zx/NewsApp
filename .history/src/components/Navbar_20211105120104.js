import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Navbar = () => {
  
   // https://hn-s.herokuapp.com/education  // guruji 
   
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style = {{marginTop: "3em"}}>
        <Link className="navbar-brand" to="/">NEWS-365</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="#">Newest<span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Business">Business</Link>
            </li> <li className="nav-item">
              <Link className="nav-link" to="/Entertainment">Entertainment</Link>
            </li> <li className="nav-item">
              <Link className="nav-link" to="/Sports">Sports</Link>
            </li> <li className="nav-item">
              <Link className="nav-link" to="/Science">Science</Link>
            </li> <li className="nav-item">
              <Link className="nav-link" to="/Technology">Technology</Link>
            </li> <li className="nav-item">
              <Link className="nav-link" to="/General">General</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  

}

export default Navbar
