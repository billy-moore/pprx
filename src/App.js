
import './App.css';

//* Context
import { ComponentContextProvider } from './Context/ComponentContext'

//* Theme
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './Styles/Theme'

//* Sections
// import Header from './Layout/Header'
// import Sidebar from './Layout/Sidebar'
import Body from './Layout/Body'
//import Footer from './Layout/Footer'

function App() {
  return (
    <div className="App" style = {{margin: '10px'}}>
      <ThemeProvider theme = { theme }>
        <ComponentContextProvider>
          {/* <Header />
          <Sidebar /> */}
          <Body />
          {/* <Footer /> */}
        </ComponentContextProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
