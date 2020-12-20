import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { Link, useIntl } from 'gatsby-plugin-intl'
import Button from '@material-ui/core/Button'

import DropDownMenu from './DropDownMenu'
import Langs from '../Langs'
import Quote from '../../ContactForms/GetQuote'
import { NourLogo } from '../../icons/NourLogo'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderBottom: '10px solide black',
  },
  menuButton: {},
  navBar: {
    backgroundColor: 'white',
    borderBottom: '1px solid',
    borderBottomColor: 'black',
  },
  navButton: {
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '16px',
    textTransform: 'none',
    borderRadius: '0px',
    margin: '0 2rem 0 2rem',

    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    },
  },
  active: {
    color: theme.palette.primary.main,
  },
  getQuote: {
    borderRadius: '10px',
    textTransform: 'none',
    fontSize: '16px',
  },
  tool: {
    ...theme.mixins.toolbar,
  },
}))

export const NavLink = ({ name, destination }, props) => {
  const classes = useStyles()
  return (
    <div>
      <Button
        disableRipple
        disableElevation
        size="large"
        component={Link}
        to={destination}
        className={classes.navButton}
        activeClassName={classes.active}
        {...props}
      >
        {name}
      </Button>
    </div>
  )
}

const DesktopHeader = () => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <div className={classes.root}>
      <Toolbar className={classes.tool}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          component={Link}
          to="/"
        >
          <NourLogo height="40" width="40" />
        </IconButton>{' '}
        <Typography variant="h6">
          {intl.formatMessage({ id: 'mainData.nour' })}{' '}
        </Typography>
        <div style={{ flex: 1 }} />
        <NavLink
          destination="/"
          name={intl.formatMessage({ id: 'navs.home' })}
        />
        <NavLink
          destination="/aboutus"
          name={intl.formatMessage({ id: 'navs.aboutus' })}
        />
        <DropDownMenu />
        <Langs />
        <Quote color="primary" />
      </Toolbar>
    </div>
  )
}

export default DesktopHeader
