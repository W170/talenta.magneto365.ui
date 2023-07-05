import React, { useEffect } from 'react'
import { ContextAppProvider } from '../src/components/context/context.component'

const loadGoogleFonts = () => {
  if (document.getElementById('g-fonts-mulish')) return
  const googleFontsUri = new URL('https://fonts.googleapis.com/css2')
  const style = document.createElement('style')
  googleFontsUri.searchParams.set('family', 'Mulish:ital,wght@0,400;0,700;1,400;1,700')
  googleFontsUri.searchParams.set('display', 'swap')
  style.id = 'g-fonts-mulish'
  style.innerHTML = `@import url('${googleFontsUri.toString()}');`
  window.document.head.insertBefore(style, window.document.head.firstChild)
}

const fixGlobalStyles = () => {
  if (document.getElementById('storybook-overwrites')) return
  const style = document.createElement('style')
  style.id = 'storybook-overwrites'
  style.innerHTML = `
    html {
      box-sizing: border-box;

    }
    *, *:before, *:after {
      box-sizing: inherit;
    }  
    body {
      font-family: "Mulish", sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Lato", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue";
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      list-style-type: none;
    } 
    a {
      text-decoration: none !important;
      color: black;
    }`
  window.document.head.insertBefore(style, window.document.head.firstChild)
}
export const withContext = (Story: React.FC) => {
  useEffect(loadGoogleFonts, [])
  useEffect(fixGlobalStyles, [])
  return (
    <ContextAppProvider device="desktop">
      <Story />
    </ContextAppProvider>
  )
}
