import React from 'react'
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const MobileLang = () => {
  return (
    <IntlContextConsumer>
      {({ languages, language: currentLocale }) => (
        <Grid container spacing={1}>
          <Grid item xs={6} sm={6}>
            {' '}
            <Button
              variant="contained"
              color="primary"
              onClick={() => changeLocale('fr')}
              fullWidth
            >
              French
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            {' '}
            <Button
              color="primary"
              variant="contained"
              onClick={() => changeLocale('en')}
              fullWidth
            >
              English
            </Button>
          </Grid>
        </Grid>
      )}
    </IntlContextConsumer>
  )
}

export default MobileLang
