import React, {useState} from 'react'
import about from '../images/about.png'
import data from "./data/links.js"
import { useNavContext } from './data/Maincontext'
const About = () => {
const data=  useNavContext();
console.log(data)
    
    return (
      <section className='about'>
        <div>
          <h1> Designed and Developed By Kripu Khadka @ 2021. </h1>
          <h2> A developer consistently working on projects, sharpening existing skills along with new focused on learning new tech stacks.</h2>
        </div>
        <img src={about} />
      </section>
    );
}

export default About
