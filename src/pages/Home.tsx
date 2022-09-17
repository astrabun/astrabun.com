import React from "react";
import { Box, Grid, Link, Typography, useMediaQuery, useTheme } from "@mui/material";
import LinksFullList from "../components/LinksFullList";
import LinksHeader from "../components/LinksHeader";
import Page from "../components/Page";
import { config } from "../config";
import MascotImage from "../components/MascotImage";
import ChangeMascotButton from "../components/ChangeMascotButton";
import MascotAttribution from "../components/MascotAttribution";

import astraSittin from "../mascots/PUNXSimon_flirty.png";
import Ion from "../components/Ion";

function Home() {
  const theme = useTheme();
  const [mascot, setMascot] = React.useState<number>(0); // store mascot image index

  const IsNotSmol = () => useMediaQuery(() => theme.breakpoints.up("sm"));

  return (
    <div>
      <Page>
        {IsNotSmol() ? ( // not-so-smol sized screen
          <Box>
            <Box
              style={{
                position: "absolute",
                zIndex: 0,
                alignItems: "flex-start",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div>
                <img
                  alt={"Astra"}
                  src={astraSittin}
                  style={{
                    marginTop: "3em",
                    marginLeft: "3em",
                    height: "15em",
                  }}
                />
              </div>
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  zIndex: 2,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h1" style={{ userSelect: "none" }}>
                  {config.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textShadow: "2px 2px #000",
                  }}
                >
                  {config.subtitle}
                </Typography>
              </Box>

              <Box
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <LinksHeader />
              </Box>
            </Box>
          </Box>
        ) : (
          // smol-sized window
          <Box>
            <Box
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <MascotImage mascot={mascot} />
            </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                gap: "1em",
              }}
            >
              <Box
                style={{
                  position: "relative",
                  zIndex: 2,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="h1" style={{ userSelect: "none" }}>
                  {config.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    textShadow: "2px 2px #000",
                  }}
                >
                  {config.subtitle}
                </Typography>
                <MascotAttribution mascot={mascot} />
              </Box>

              <Box
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <LinksHeader />
              </Box>
            </Box>
          </Box>
        )}

        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item sm={8} xs={12}>
            <Box
              style={{ display: "flex", flexDirection: "column", gap: "1em" }}
            >
              <LinksFullList />
            </Box>
          </Grid>
          {IsNotSmol() ? (
            <Grid item xs={4}>
              <Box
                style={{
                  // position: "absolute",
                  // zIndex: 1,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <MascotImage mascot={mascot} />
              </Box>
            </Grid>
          ) : (
            ""
          )}
        </Grid>

        <Box
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <MascotAttribution mascot={mascot} />
          <ChangeMascotButton mascot={mascot} setMascot={setMascot} />
        </Box>

        {/* TODO: Egg Icon (small) that links to rick roll */}
        <div style={{ marginBottom: '5em' }} />
        <Box
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer" sx={{ a: {textDecoration: "none"} }}><Ion name={"egg"} size={"small"} /></Link>
        </Box>
      </Page>
    </div>
  );
}

export default Home;
