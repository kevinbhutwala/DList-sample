import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
  return (  
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-dark`} style={{}}
    >
      <div className="container-fluid bg-light">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler "
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedC  ontent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" aria-current="page" to="/">
              DiamondLists
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/ProductList">
              ProductList
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="/ProductDetail">
              ProductDetail
              </Link>
            </li>

          </ul>
          
          
        </div>
      </div>
    </nav>
  );
}
