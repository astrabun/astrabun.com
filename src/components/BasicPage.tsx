import { Container } from '@mui/material'
import React from 'react'

import { createTheme, ThemeOptions, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import "./BasicPage.css";

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      // main: '#34609f',
      main: '#74a6ed',
    },
    secondary: {
      main: '#6df0c9',
    },
    background: {
      // default: '#132e47', // astra
      // default: '#012e56', // msg
      default: '#001120', // new/basic
    },
  },
  typography: {
    // fontFamily: "monospace",
    fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace`,
  },
};

const theme = createTheme(themeOptions);

function BasicPage(props: React.PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth={'md'}>{props.children}</Container>
    </ThemeProvider>
  )
}

export default BasicPage