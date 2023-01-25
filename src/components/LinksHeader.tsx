import { Grid, Link } from '@mui/material'
import React from 'react'
import { config } from '../config'

function LinksHeader() {
  return (
    // <Box style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
    <div style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '1em' }}>
        {/* <Grid container spacing={5} justifyContent="center"> */}
        {config.links.map(l => (
            <Grid item xs={1}>
                <Link
                  href={l.link}
                  target="_blank"
                  rel={l.customRel || "noreferrer"}
                  style={{
                    textDecoration: 'none',
                  }}
                  className={l.special==="tempWarning" ? "err" : l.special==="tempInfo" ? "errinfo" : ""}
                >
                    {l.icon}
                </Link>
            </Grid>
        ))}
        {/* </Grid> */}
    </div>
  )
}

export default LinksHeader
