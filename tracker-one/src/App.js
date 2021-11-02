import React from 'react'
import Header from './components/Header'
import "./css/style.css"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Footer from './components/Footer'
import About from './components/About'
import Resources from './components/Resources'
import Version from './components/Version'
import Error from './components/Error'
import Home from './components/Home'
const App = () => {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
              <Route exact path="/">
<Home/>

              </Route>
              <Route path="/about">
                  <About/>
              </Route>
              <Route path="/Resources">
                  <Resources/>
              </Route>
              <Route path="/version">
                  <Version/>
              </Route>
              <Route path="*">
                  <Error/>
              </Route>
          </Switch>
          <Footer/>
        </Router>
      </div>
    );
}

export default App
