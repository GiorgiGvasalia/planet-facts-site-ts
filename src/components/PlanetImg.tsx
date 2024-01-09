import React from 'react'

interface PlanetImg {
    img: string;
}

const PlanetImg: React.FC<PlanetImg> = ({img}) => {
  return (
    <img src={img} />
  )
}

export default PlanetImg