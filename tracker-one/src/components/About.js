import React, {useState} from 'react'
import about from '../images/about.png'
import data from "./data/links.js"
import { useNavContext } from './data/Maincontext'
import Links from './Links'
const About = () => {

    return (
      <section className="about">
        <div>
          <h1> Designed and Developed By Kripu Khadka @ 2021. </h1>
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
