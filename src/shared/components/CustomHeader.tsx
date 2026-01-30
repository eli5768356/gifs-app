import React from 'react'

interface Props
{
  title:string
  subtitle?:string
}

export const CustomHeader = ({title, subtitle}:Props) => {
  return (
    <header className="content-center">
            <h1>{title}</h1>
            <p>{subtitle}</p>
    </header>
  )
}
