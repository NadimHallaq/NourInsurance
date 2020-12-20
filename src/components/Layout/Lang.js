import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import { makeStyles } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp'
import { Hidden } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    // minWidth: 120,
    backgroundColor: 'white',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    fontFamily: 'Open Sans',
    fontWeight: 700,

    textTransform: 'none',
    borderRadius: '0px',
    margin: '0 2rem 0 0rem',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    },
  },
}))

const Lang = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [lang, setLang] = React.useState()

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
    changeLocale('fr')
    setLang('French')
  }
  const handleClosed = () => {
    setAnchorEl(null)
    changeLocale('en')
    setLang('English')
  }

  const close = () => {
    setAnchorEl(null)
  }

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.select}
            disableRipple
            disableElevation
            size="large"
            endIcon={<ArrowDropDownSharpIcon />}
          >
            {lang}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={close}
          >
            <MenuItem onClick={handleClose}>French</MenuItem>
            <MenuItem onClick={handleClosed}>English</MenuItem>
          </Menu>
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default Lang
