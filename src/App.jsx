import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AdminRoutes from './component/root/AdminRoutes'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [count, setCount] = useState(0)
  const [theme, colorMode] = useMode();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route element={<AdminRoutes />}>
          <Route path='/dashboard' element={<h6>hello world</h6>} />
          <Route path='/categories' element={<h2>sandansk</h2>} />
          <Route path='/Products' element={<h2>Product</h2>} />
        </Route>

      </Route>
    )
  )

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

<RouterProvider router={router}>

</RouterProvider>
</ThemeProvider>
    </>
  )
}

export default App
