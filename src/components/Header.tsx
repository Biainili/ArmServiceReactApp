import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3">
      <div className="container">
        <a href="/" className="navbar-brand">Arm Service Provider</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarId"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarId">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#migarm" className="nav-link">Migration in Armenia</a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">Services</a>
            </li>
            <li className="nav-item">
              <a href="#contactus" className="nav-link">Contact us</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header