import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { FaCross } from 'react-icons/fa';
import { useNavContext } from './data/Maincontext';
const Header = () => {
  const {toggleSideBar, show} = useNavContext();
    return (
      <header>
        <nav>
          <main className="wrapper">
            <section className="nav-container">
              <h1>
                Global <span>Tracker </span>
              </h1>
              <button className="toggler" onClick={() => toggleSideBar()}>
                {" "}
                <FaBars />{" "}
              </button>
            </section>

            <section
              className={show ? "links-container-show" : "links-container"}
            >
              
              <ul>
                <button className="toggle-btn" onClick={() => toggleSideBar()}>
                  <FaCross />{" "}
                </button>
                <li>
                  <Link to="/"> Home</Link>
                </li>

                <li>
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
