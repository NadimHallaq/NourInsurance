import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'
import LanguageIcon from '@material-ui/icons/Language'

import IconButton from '@material-ui/core/IconButton'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const Langs = () => {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <div>
          <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            style={{ margin: '0 2rem 0 0rem' }}
            onClick={handleClick}
          >
            <LanguageIcon style={{ color: 'black' }} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => changeLocale('en')}>English</MenuItem>
            <MenuItem onClick={() => changeLocale('fr')}>French</MenuItem>
          </Menu>
        </div>
      )}
    </IntlContextConsumer>
  )
}

export default Langs
