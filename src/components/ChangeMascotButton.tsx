import { Button } from '@mui/material'
import React from 'react'
import { config } from '../config'

function ChangeMascotButton(props: {mascot: number, setMascot: (newMascot: number) => void}) {
  return (
    <Button
      variant="contained"
      color="secondary"
      onClick={() => {
        props.setMascot((props.mascot + 1)%config.mascots.length);
        window.scrollTo({ top: 0, behavior: 'smooth' }); // scroll to top added mainly for mobile
      }}
    >
      Change Mascot
    </Button>
  )
}

export default ChangeMascotButton