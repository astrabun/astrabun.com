import { Box, Link, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import BasicPage from '../components/BasicPage'

import hackfurs_blep_png from "../mascots/hackfurs_blep.png";
import { config } from '../config';

function BasicHome() {
  return (
    <div>
      <BasicPage>
          <div style={{ marginBottom: "1rem" }} />
          <img src={hackfurs_blep_png} alt="Blep! (art by Hackfurs)" style={{
            height: "30vh"
          }} />
          <Box
            style={{
              position: "relative",
              zIndex: 2,
              // alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography variant="h2">{config.title}</Typography>
            <Typography variant="caption" gutterBottom>
              {config.subtitle}
            </Typography>

            <hr style={{ marginBottom: "1rem", width: "100%" }} />

            <Typography variant="h4">Links</Typography>
            <List>
              {config.links.map((l, idx: number) => {
                return (
                  <ListItem
                    key={idx}
                  >
                    <ListItemIcon>
                      {l.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={<>
                        <Link
                          href={l.link}
                          target="_blank"
                          rel={l.customRel || "noreferrer"}
                          style={{
                            textDecoration: 'none'
                          }}
                        >
                          {l.name}
                        </Link>
                      </>}
                      secondary={l.specialDetail || l.description || ""}
                    />
                  </ListItem>
                )
              })}
            </List>

            <div style={{ marginBottom: "1rem" }} />

            <hr style={{ marginBottom: "1rem", width: "100%" }} />

            <div style={{ marginBottom: "1rem" }} />

            <Typography variant="caption" gutterBottom>
              (art @ top of page by Hackfurs; character by AstraBun)
            </Typography>

            <div style={{ marginBottom: "5rem" }} />
            
          </Box>
      </BasicPage>
    </div>
  )
}

export default BasicHome