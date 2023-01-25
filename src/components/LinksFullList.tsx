import { Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { config } from '../config'
import StyledPaper from './StyledPaper'

function LinksFullList() {
  return (
    <List>
      {config.links.map(l => (
        <Link
          href={l.link}
          target="_blank"
          rel={l.customRel || "noreferrer"}
          style={{
            textDecoration: 'none'
          }}
        >
          <StyledPaper elevation={1} style={{ marginBottom: "1em", padding: '0.5em', backgroundColor: l.special === "tempWarning" ? "red" : l.special === "tempInfo" ? "orange" : "" }}>
            <ListItem>
              <ListItemIcon>
                {l.icon}
              </ListItemIcon>
              <ListItemText
                primary={l.name}
                secondary={l.specialDetail || l.description || ""}
              />
            </ListItem>
          </StyledPaper>
        </Link>
      ))}
    </List>
  )
}

export default LinksFullList
