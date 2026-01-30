import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import { CustomHeader } from './shared/components/CustomHeader'
import { CustomSearch } from './shared/components/CustomSearch'
import { CustomList } from './shared/components/PreviousSearches'
import { GifsContainer } from './gifs/components/GifsContainer'

export const GifsApp = () => {

    const [previousTerms, setPreviousTerms] = useState(["animales", "fotos"]);
    const handleTermClick = ( term:string ) =>
    {
        console.log(`Term clicked: ${term}`);
    }
    const handleSearch = ( query:string ) => 
    {
        console.log(query);
    }

  return (
    <>
        <CustomHeader title="Buscador de Gifs" 
        subtitle="Descubre y comparte el GIF perfecto." />

        <CustomSearch placeholder='Buscar gifs...' 
        buttonText='Buscar'
        onSearch={handleSearch}/>

        <CustomList items={previousTerms} onLabelClick={handleTermClick} />

        <GifsContainer gifs={mockGifs}/>
    </>
  )
}
