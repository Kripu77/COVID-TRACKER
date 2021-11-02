import React from 'react'
import data from "../images/data.png"
import Display from './Display';
const Home = () => {
    return (
      <main>
        <section className="Home">
          <h1>
            “We have a chance to do something extraordinary. As we head out of
            this pandemic we can change the world. Create a world of love. A
            world where we are kind to each other. A world were we are kind no
            matter what class, race, sexual orientation, what religion or lack
            of or what job we have. A world we don't judge those at the food
            bank because that may be us if things were just slightly different.
            Let love and kindness be our roadmap.”
          </h1>
          <img src={data} />
        </section>
        <Display/>
      </main>
    );
}

export default Home
