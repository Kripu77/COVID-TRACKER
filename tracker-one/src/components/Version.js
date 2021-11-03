import React from 'react'
import version from '../images/version.png'
import { Helmet } from 'react-helmet';
const Version = () => {
  <Helmet>
    <meta charSet="utf-8" />
    <title>Version 1.0</title>
    <link rel="canonical" href="http://kripukhadka.com" />
  </Helmet>;
    return (
      <section className='version'>
        <h1> Verison beta 1.00. Currently Working On More Relational Updates for smaller screen sizes.</h1>
        <img src={version}/>
      </section>
    );
}

export default Version
