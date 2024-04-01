
import { Container, CssBaseline, Switch } from '@mui/material'
import './App.css'
import LoginForm from './component/LoginForm'
import NavBar from './component/Navbar/NavBar'
import SideBar from './component/SideBar/SideBar'
import { ColorModeContext } from "../theme";
import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import ToggleButton from './component/Switch/Switch'

function App() {
  const [mode, setMode] = useState("dark");
  


  
  function toggleColorMode() {
    setMode((previous) => (previous === "light" ? "dark" : "light"));
  }
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode   // The palette will be in 'light' or 'dark' mode, depending on the state variable
        },
      }),
    [mode]      // Every time the state variable changes, the 'useMemo' hook will execute
  );
  return (
    <>
     <ColorModeContext.Provider value={toggleColorMode}>
		<ThemeProvider theme={theme}>
    <CssBaseline />

    <Container maxWidth="100px">

    <NavBar/>
    <SideBar/>
    <LoginForm/>
    <ToggleButton />
    </Container>
    </ThemeProvider>
    
    
      </ColorModeContext.Provider>
    </>
  )
}

export default App
