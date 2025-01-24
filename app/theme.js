'use client';
import { Roboto, Libre_Caslon_Text, Libre_Caslon_Display } from 'next/font/google';
import localFont from 'next/font/local'
import { createTheme } from '@mui/material/styles';

const mossGreen = '#9ba770';
const darkMossGreen = '#14231B';
const darkSlateGreen = '#384D48';
const roseTaupe = '#86615c';
const ghostWhite = '#E8E9F3';
const paperWhite = '#F7F7F7';
const nonPhotoBlue = '#B1E5F2';
const deepPlum = '#301e2c';


const libreCaslonDisplay = Libre_Caslon_Display({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
})

const libreCaslonText = Libre_Caslon_Text({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const inLivingColor = localFont({
  src: './fonts/inlivingcolorregular-rpj8m-webfont.woff2',
  display: 'swap',
})

const kidTShirt = localFont({
  src: './fonts/kidstshirt-lgzaz-webfont.woff2',
  display: 'swap',
})

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: 'light',
    primary: {
      main: mossGreen,
      dark: darkMossGreen,
      highlight: mossGreen
    },
    secondary: {
      main: darkMossGreen,
      light: mossGreen,
      dark: mossGreen
    },
    error: {
      main: roseTaupe,
    },
    background: {
      default: "#ffffff",
      paper: paperWhite
    },
    success: {
      main: darkSlateGreen,
    }
  },
  typography: {
    fontFamily: libreCaslonDisplay.style.fontFamily,
    letterSpacing: '0.02em',
    pageTitle: {
      fontFamily: inLivingColor.style.fontFamily,
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    introMessage: {
      fontSize: '1.4rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    selectorInstructions: {
      fontSize: '1.2rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    pageAccent: {
      fontFamily: kidTShirt.style.fontFamily,
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    inputLabel: {
      fontFamily: kidTShirt.style.fontFamily,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    currentLabel: {
      fontFamily: kidTShirt.style.fontFamily,
      fontSize: '2rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    botMessage: {
      fontFamily: libreCaslonText.style.fontFamily,
      fontSize: '1rem',
      lineHeight: 1.2,
      letterSpacing: '0.02em'
    },
    userMessage: {
      fontFamily: libreCaslonText.style.fontFamily,
      fontSize: '1rem',
      lineHeight: 1.2,
      letterSpacing: '0.0em'
    },
    button: {
      fontFamily: kidTShirt.style.fontFamily,
      fontSize: '1.5rem',
    },
  },
});

export default theme;