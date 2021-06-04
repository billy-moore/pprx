import { createMuiTheme } from '@material-ui/core'
import { green, purple } from '@material-ui/core/colors'

// * Create the theme instance
const Theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: green,
    },
})

export default Theme