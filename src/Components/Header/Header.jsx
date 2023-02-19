import React from 'react';
import { NavLink , Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-0 py-3">
  <div className="container-xl">
    {/* <!-- Logo --> */}
    <Link to="/" className="navbar-brand">ICE AND FIRE</Link>
    {/* <!-- Navbar toggle --> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* <!-- Collapse --> */}
    <div className="collapse navbar-collapse" id="navbarCollapse">
      {/* <!-- Nav --> */}
      <div className="navbar-nav mx-lg-auto">
        <NavLink to="/books" className="nav-item nav-link active" aria-current="page">Books</NavLink>
        <NavLink to="/characters" className="nav-item nav-link active" aria-current="page">Chararcters</NavLink>
        <NavLink to="/houses" className="nav-item nav-link active" aria-current="page">Houses</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;