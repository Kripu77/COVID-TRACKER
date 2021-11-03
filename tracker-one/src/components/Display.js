import React from 'react'
import { useNavContext } from './data/Maincontext'
const Display = () => {

   const {apiData} = useNavContext();
   const fnlData = [apiData]
  
    return (
      <section className="display-table">
        <h1> Cases Records:</h1>
        <div>
          {fnlData.map((data) => {
    

            const {
              active,
              activePerOneMillion,
              affectedCountries,
              cases,
              critical, deaths, tests, todayCases, todayDeaths, todayRecovered
            } = data;

            return (
              <div
                key={new Date().getTime().toString()}
                className="parent-wrapper"
              >
                <div className="item-one">
                  <h1> Active Cases</h1>
                  <h2> {active}</h2>
                </div>
                <div className="item-two">
                  <h1> Cases active per million</h1>
                  <h2> {activePerOneMillion}</h2>{" "}
                </div>
                <div className="item-three">
                  <h1> Total Number of Affected Countries:</h1>
                  <h2>{affectedCountries}</h2>
                </div>
                <div className='item-four'>
                  <h1> Total Number of Cases: </h1>
                  <h2> {cases}</h2>
                </div>
                <div className='item-five'>
                  <h1> Critical Cases:</h1>
                  <h2> {critical}</h2>
                </div>
                <div className='item-six'>
                  <h1> Total Number of Deaths:</h1>
                  <h2> {deaths}</h2>
                </div>
          <div>

              <h1> Deaths today:</h1>
              <h2> {todayDeaths}</h2>
          </div>
              </div>
            );
          })}{" "}'
          <h3>Source: Lmao Ninja. Updating every 5seconds.</h3>
        </div>
      </section>
    );
}

export default Display
