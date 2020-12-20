import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import Header from './Header/Header'

import NewFooter from './NewFooter'

const Layout = ({ children }) => {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Header />
       
        {children}
         
        <NewFooter />
      </MuiThemeProvider>
    </div>
  )
}

export default Layout
