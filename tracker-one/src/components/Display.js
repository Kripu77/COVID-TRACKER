import React from 'react'
import { useFetchCustom } from './data/useFetchCustom'
const Display = () => {

    const {apiData} = useFetchCustom();
    return (
      <section className='display-table'>
          {
              apiData.map((data)=>{
                  console.log(data);
              })
          }
      </section>
    )
}

export default Display
