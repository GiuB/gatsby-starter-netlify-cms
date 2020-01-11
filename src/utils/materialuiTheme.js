import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#23989c',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#c891ff',
      main: '#af5eff',
      // dark: will be calculated from palette.secondary.main,
    },
  },
})

console.log(theme)

export default theme
