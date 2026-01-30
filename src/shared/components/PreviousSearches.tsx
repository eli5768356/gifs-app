import React from 'react'

interface Props
{
    items: string[],
    onLabelClick: ( term:string ) => void;
}

export const CustomList = ({items, onLabelClick}:Props) => {
  return (
    <div className="previous-searches">
        <h2>Búsquedas anteriores</h2>
        <ul className="previous-searches-list">
            {items.map((item) => (
                <li key={item}
                onClick={ () => onLabelClick(item) }
                >{item}</li>
            ))}
        </ul>
    </div>
  )
}
