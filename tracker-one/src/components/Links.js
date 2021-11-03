import React from 'react'
import { useNavContext } from './data/Maincontext';
//resuable component for links
const Links = () => {
    const data = useNavContext();
    const { links} = data;

    
    return (
      <section className="mapped-data">
        {links.map((link) => {
          const { name, url, id } = link;
          return (
            <div key={id} className="data-item">
              <a href={url} alt={name}>
                {name}
              </a>
            </div>
          );
        })}
      </section>
    );
}

export default Links
