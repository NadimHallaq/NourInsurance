import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import { Link, useIntl } from 'gatsby-plugin-intl'
import { Button } from 'gatsby-theme-material-ui'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp'
import Paper from '@material-ui/core/Paper'

import DriveEtaIcon from '@material-ui/icons/DriveEta'
import HomeIcon from '@material-ui/icons/Home'
import StoreIcon from '@material-ui/icons/Store'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive'
const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    width: '200px',
    top: 60,
    right: 0,
    left: 0,
    zIndex: 1,
    overflow: 'hidden',

    backgroundColor: theme.palette.background.paper,
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
}))

const DropDownMenu = () => {
  const classes = useStyles()
  const intl = useIntl()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(prev => !prev)
  }

  const handleClickAway = () => {
    setOpen(false)
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <Button
          disableRipple
          disableElevation
          size="large"
          endIcon={<ArrowDropDownSharpIcon />}
          className={classes.navButton}
          onClick={handleClick}
        >
          {' '}
          {intl.formatMessage({ id: 'navs.services' })}
        </Button>
        {open ? (
          <Paper elevation={5} className={classes.dropdown}>
            <Button
              component={Link}
              to="/auto"
              variant="contained"
              fullWidth
              color="secondary"
              disableElevation
              size="large"
              style={{
                borderRadius: 0,
                border: '1px solid #FBC02D',
                textTransform: 'none',
              }}
              endIcon={<DriveEtaIcon />}
              activeClassName={classes.active}
            >
              {intl.formatMessage({ id: 'services.one' })}
            </Button>
            <Button
              component={Link}
              to="/home"
              variant="contained"
              fullWidth
              color="secondary"
              size="large"
              disableElevation
              style={{
                borderRadius: 0,
                border: '1px solid #FBC02D',
                textTransform: 'none',
              }}
              endIcon={<HomeIcon />}
            >
              {intl.formatMessage({ id: 'services.two' })}
            </Button>
            <Button
              component={Link}
              to="/commercial"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              disableElevation
              style={{
                borderRadius: 0,
                border: '1px solid #FBC02D',
                textTransform: 'none',
              }}
              endIcon={<StoreIcon />}
            >
              {intl.formatMessage({ id: 'services.three' })}
            </Button>
            <Button
              component={Link}
              to="/life"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              disableElevation
              style={{
                borderRadius: 0,
                border: '1px solid #FBC02D',
                textTransform: 'none',
              }}
              endIcon={<FavoriteIcon />}
            >
              {intl.formatMessage({ id: 'services.four' })}
            </Button>
            <Button
              component={Link}
              to="/health"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              disableElevation
              style={{
                borderRadius: 0,
                border: '1px solid #FBC02D',
                textTransform: 'none',
              }}
              endIcon={<LocalHospitalIcon />}
            >
              {intl.formatMessage({ id: 'sr.ht' })}
            </Button>
            <Button
              component={Link}
              to="/travel"
              variant="contained"
              color="secondary"
              fullWidth
              size="large"
              disableElevation
              style={{
                borderRadius: 0,
                border: '1px solid #FBC02D',
                textTransform: 'none',
              }}
              endIcon={<AirplanemodeActiveIcon />}
            >
              {intl.formatMessage({ id: 'sr.tr' })}
            </Button>
          </Paper>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}

export default DropDownMenu
