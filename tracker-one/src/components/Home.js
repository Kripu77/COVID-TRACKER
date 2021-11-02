import React from 'react'
import data from "../images/data.png"
import Display from './Display';
import ImageGrid from './ImageGrid';
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
        <Display />
        <section className="Home">
          <h1>
            “IN OCTOBER 2019, just a few months before the novel coronavirus
            swept the world, Johns Hopkins University released its first Global
            Heath Security Index, a comprehensive analysis of countries that
            were best prepared to handle an epidemic or pandemic. The United
            States ranked first overall, and first in four of the six
            categories—prevention, early detection and reporting, sufficient and
            robust health system, and compliance with international norms. That
            sounded right. America was, after all, the country with most of the
            world’s best pharmaceutical companies, research universities,
            laboratories, and health institutes. But by March 2020, these
            advantages seemed like a cruel joke, as Covid-19 tore across the
            United States and the federal government mounted a delayed, weak,
            and erratic response. By July, with less than 5% of the world’s
            population, the country had over 25% of the world’s cumulative
            confirmed cases. Per capita daily death rates in the United States
            were ten times higher than in Europe. Was this the new face of
            American exceptionalism?” ― Fareed Zakaria, Ten Lessons for a
            Post-Pandemic World{" "}
          </h1>
        </section>
        <ImageGrid/>
      </main>
    );
}

export default Home
