import React from 'react'
// import MuiButton, {ButtonProps} from '@material-ui/core/Button'
import { Paper, PaperProps } from '@mui/material'

interface PaperOptions {
    // your custom options with their types
  }

const StyledPaper = <C extends React.ElementType>(props: PaperProps<C, {component?: C}> & PaperOptions ) => {
  const [mousedOver, setMousedOver] = React.useState<boolean>(false);
  // onMouseOver = () => setMousedOver(true);
  // onMouseOut = () => setMousedOver(false);
  return <Paper onMouseOver={() => setMousedOver(true)} onMouseOut={() => setMousedOver(true)} className={mousedOver ? "grow" : ""} {...props}>{props.children}</Paper>
}

export default StyledPaper
 
// use like this:  
// import {Link} from 'react-router-dom'
// import { Paper, PaperProps } from '@mui/material'
// <Button component={Link} to={'/somelocation'}>