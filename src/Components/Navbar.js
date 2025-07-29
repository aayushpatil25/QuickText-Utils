import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props){
    return(
        <>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="#">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                    </li>
                    <br />
                   <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.about}</Link>
                  </li> 
                </ul>
                {/* <form className="d-flex" role="search">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-primary" type="submit">Search</button>
                </form> */}
                
                <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                    {props.btnText}
                  </label>
                  {props.mode === 'dark' && (
                  <div className="d-flex align-items-center mx-3">
                    <div
                      className="bg-primary rounded mx-1"
                      onClick={() => props.applyDarkColor('#0d6efd')}
                      style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                    ></div>
                    <div
                      className="bg-success rounded mx-1"
                      onClick={() => props.applyDarkColor('#198754')}
                      style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                    ></div>
                    <div
                      className="bg-danger rounded mx-1"
                      onClick={() => props.applyDarkColor('#dc3545')}
                      style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                    ></div>
                    <div
                      className="bg-warning rounded mx-1"
                      onClick={() => props.applyDarkColor('#ffc107')}
                      style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                    ></div>
                    <div
                      className="bg-dark rounded mx-1 border border-light"
                      onClick={() => props.applyDarkColor('#212529')}
                      style={{ height: '20px', width: '20px', cursor: 'pointer' }}
                    ></div>
                  </div>
                )}

                </div>
                
            </div>
          </div>
      </nav>
    </>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set title',
    about:'About us'
};