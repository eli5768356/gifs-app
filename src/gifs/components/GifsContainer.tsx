import React from 'react'
import type { Gif } from '../../mock-data/gifs.mock';

interface Props
{
    gifs:Gif[];
}

export const GifsContainer = ({gifs}:Props) => {
  return (
    <div className="gifs-container">
            {
                gifs.map( (gif) => 
                {
                    return(
                        <div key={gif.id} className="gif-card">
                        <img  
                        src={gif.url} 
                        alt={gif.title}  
                        />
                        <h3>{gif.title}</h3>
                        <p>{gif.height}x{gif.width}</p>
                        </div>
                    );
                })
            }
        </div>
  )
}
