import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
      <header>
        <nav>
          <main className="wrapper">
            <section className="nav-container">
              <h1>
                Global <span>Tracker </span>
              </h1>
            </section>
            <section className="links-container">
              <ul>
                <li>
                  <Link to="/"> Home</Link>
                </li>

                <li >
                  <Link to="/About"> About</Link>
                </li>
                <li>
                  <Link to="/Resources">Resources</Link>
                </li>
                <li>
                  {" "}
                  <Link to="/Version">Version</Link>
                </li>
              </ul>
            </section>
          </main>
        </nav>
      </header>
    );
}

export default Header
