import { createMuiTheme } from '@material-ui/core'
import { lightBlue, purple } from '@material-ui/core/colors'

// * Create the theme instance
const Theme = createMuiTheme({
    palette: {
        primary: purple,
        secondary: lightBlue,
    },
})

export default Theme