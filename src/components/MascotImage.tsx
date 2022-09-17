import React from 'react'
import { config } from '../config'

const getImageFromIndex = (idx: number): any => {
  return config.mascots[idx].image;
}

const getImageArtistNameFromIndex = (idx: number): any => {
  return config.mascots[idx].artist;
}

function MascotImage(props: {mascot: number}) {
  return (
    <div>
      <img
        src={getImageFromIndex(props.mascot)}
        style={{
          height: "15em"
        }}
        alt={`Mascot by ${getImageArtistNameFromIndex(props.mascot)}`}
      />
    </div>
  )
}

export default MascotImage