import { Link } from "react-router-dom"
export default function Navbar({ dark, changeMode, page }) {
  return (
    <nav className={`navbar ${dark ? 'navbar-dark bg-dark' : 'navbar-light bg-light'} navbar-expand-lg bg-body-tertiary`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TextUtils</a>
        <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${page === 'home' ? 'active' : ''}`} aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${page === 'about' ? 'active' : ''}`} aria-current="page" to="/about">About</Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-success" type="submit">Search</button>
          </form> */}
          <div className={`form-check form-switch ${dark ? 'text-light' : 'text-dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={changeMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{!dark ? 'Enable' : 'Disable'} dark mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}