import React, { useEffect, useState } from 'react'

interface Props
{
    placeholder:string,
    buttonText:string,
    onSearch: ( term:string ) => void;
}

export const CustomSearch = ({placeholder, buttonText, onSearch}:Props) => {
 
  const [searchTerm, setSearchTerm] = useState("");

  useEffect( () => 
  {
    const TimeoutID = setTimeout( () => 
    {

      onSearch(searchTerm);

    }, 350)

    return () => { clearTimeout(TimeoutID); };
  }, [searchTerm, onSearch]);

  const handleSearch = () =>
  {
      onSearch(searchTerm); 
  };

  const handlePressEnter = (event:React.KeyboardEvent<HTMLInputElement>) =>
  {
    if(event.key === 'Enter')
    {
      handleSearch();
    }
  };
 
  return (
    <div className="search-container">
        <input type="text" 
        placeholder={placeholder}
        value={searchTerm}
        onChange={ (event) => setSearchTerm(event.target.value) }
        onKeyDown={handlePressEnter}
        />
        <button onClick={handleSearch}>{buttonText}</button>
    </div>
  )
}