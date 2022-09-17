import { Link } from "@mui/material";
import React from "react";
import { config } from "../config";

function MascotAttribution(props: { mascot: number }) {
  return (
    <div>
      Mascot by{" "}
      {config.mascots[props.mascot].artistLink ? (
        <Link
          href={config.mascots[props.mascot].artistLink}
          target="_blank"
          rel="noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          {config.mascots[props.mascot].artist}
        </Link>
      ) : (
        config.mascots[props.mascot].artist
      )}
    </div>
  );
}

export default MascotAttribution;
