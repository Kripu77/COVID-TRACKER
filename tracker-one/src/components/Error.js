import React from 'react'
import ErrorX from '../images/Error.png'
const Error = () => {
    return (
      <section className='error'>
        <h1>
          {" "}
          404 Error the page that you are looking for does not exist or may
          be broken. Please contact your adminstrator.
        </h1>
        <img src={ErrorX} />
      </section>
    );
}

export default Error
