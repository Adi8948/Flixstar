import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Flixstar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/movienews">MovieNews</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Action">Action</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Scifi">Scifi</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Romance">Romance</Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Subscribe">Subscribe</Link>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
              {/* <button className="btn btn-outline-light" type="submit">Search</button> */}
              <input type="text" className="search-box" placeholder="search" />
            </form>
            <Link to="/Subscribe" className="btn btn-primary mx-2">Subscribe</Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

