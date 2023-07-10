import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light' ? 'light' : 'dark',
  },
})

export default {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        50: '#f7fafc',
        // ...
        900: '#171923',
      },
      // ...
    },
  }