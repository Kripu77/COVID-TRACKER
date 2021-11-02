import React from 'react'
import resource from "../images/resource.png"
const Resources = () => {
    return (
      <section className="resource">
        <div>
          <h1> Stack Used</h1>
          <ul>
            <li>HTML5</li>
            <li>SASS</li>
            <li>
              {" "}
              React JS, React Hooks, React Router and Lazy Loading Feature
            </li>
            <li> Undraw for Images.</li>
            <li>
              {" "}
              <a href="https://corona.lmao.ninja/v3/covid-19/all"> API Link here.</a>
            </li>
          </ul>
        </div>
        <img src={resource} />
      </section>
    );
}

export default Resources
