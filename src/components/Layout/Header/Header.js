import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'


import Hidden from '@material-ui/core/Hidden'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderBottom: '10px solide black',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  navBar: {
    backgroundColor: 'white',
    borderBottom: '1px solid',
    borderBottomColor: 'black',
  },
}))

const Header = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="fixed" elevation={0} className={classes.navBar}>
        {' '}
        <Hidden only={['sm', 'xs']}>
          <DesktopHeader />
        </Hidden>
        <Hidden only={['xl', 'lg', 'md']}>
          <MobileHeader />
        </Hidden>
      </AppBar>
    </div>
  )
}

export default Header
