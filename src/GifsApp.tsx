import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearch } from './shared/components/CustomSearch'
import { CustomList } from './shared/components/PreviousSearches'
import { GifsContainer } from './gifs/components/GifsContainer'
import { GetGifsByQuery } from './gifs/actions/get-gifs.action'

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(["perros", "gatos"]);
    const [gifs, setGifs] = useState(mockGifs);

    const handleTermClick = ( term:string ) =>
    {
        console.log(`Term clicked: ${term}`);
    }
    const handleSearch = async( query:string ) => 
    {
        query = query.toLowerCase().trim();
        if(query != "")
        {
            if(!previousTerms.includes(query))
            {
                previousTerms.unshift(query);
                if(previousTerms.length > 8)
                {
                    previousTerms.pop();
                }
                setPreviousTerms([...previousTerms]);

                const fetchedGIFs = await GetGifsByQuery(query);
                setGifs(fetchedGIFs);
            }
        }
    }

  return (
    <>
        <CustomHeader title="Buscador de Gifs" 
        subtitle="Descubre y comparte el GIF perfecto." />

        <CustomSearch placeholder='Buscar gifs...' 
        buttonText='Buscar'
        onSearch={handleSearch}/>

        <CustomList items={previousTerms} onLabelClick={handleTermClick} />

        <GifsContainer gifs={gifs}/>
    </>
  )
}
