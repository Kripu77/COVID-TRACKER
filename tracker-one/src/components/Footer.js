import React from 'react'
import Links from './Links';

const Footer = () => {
    return (
      <footer>
        <main>
          <section className="footer-stack">
            <h1> Tech Stack Used</h1>
            <ul>
              <li>HTML5</li>
              <li>SASS</li>
              <li> React JS, React Hooks. </li>
              <li> React Router and Lazy Loading Feature</li>
              <li> Undraw for Images.</li>
              <li>
                {" "}
                <a href="https://corona.lmao.ninja/v3/covid-19/all">
                  {" "}
                  API Link here.
                </a>
              </li>
            </ul>
          </section>
          <section className="footer-links">
            <h1> Find me around the Web...</h1>
            <Links />
          </section>
          <section className="footer-description">
            <h1> No copy right issues.</h1>
            <p>
              {" "}
              Feel free to copy anything that helps. If you require additional
              help ping me.
            </p>
          </section>
        </main>
      </footer>
    );
}

export default Footer
