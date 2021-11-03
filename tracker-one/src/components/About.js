import React, {useState} from 'react'
import about from '../images/about.png'
import data from "./data/links.js"
import { useNavContext } from './data/Maincontext'
import Links from './Links'
import { Helmet } from 'react-helmet'
const About = () => {
<Helmet>

    <meta charSet="utf-8" />
    <title>About us </title>
    <link rel="canonical" href="http://kripukhadka.com" />

</Helmet>
    return (
      <section className="about">
        <div>
          <h1> Covid Records Tracker, Designed and Developed By Kripu Khadka @ 2021. </h1>
          <h2>
            {" "}
            A developer consistently working on projects, sharpening existing
            skills along with new focused on learning new tech stacks.
            Connect with me around the web from the links below.
          </h2>
      
            <Links/>
   
        </div>
        <img src={about} />
      </section>
    );
}

export default About
