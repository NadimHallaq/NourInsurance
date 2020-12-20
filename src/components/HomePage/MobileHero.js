import React from 'react'
import Img from 'gatsby-image'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NourLogo } from '../icons/NourLogo'
import ActionButtons from './ActionButtons'
import { useIntl } from 'gatsby-plugin-intl'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'tomato',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  image: {
    height: '100vh',
    zIndex: -1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    backgroundColor: 'rgba(1, 0, 0, 0.6)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },
  headers: {
    color: 'white',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  try: {
    color: theme.palette.primary.main,
  },
}))

const MobileHero = ({ mobileMedia, mobileTitle }) => {
  const classes = useStyles()

  const intl = useIntl()
  return (
    <div style={{ position: 'relative' }}>
      <Img fluid={mobileMedia} objectFit="cover" className={classes.image} />
      <div className={classes.text}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          style={{ paddingTop: '7rem' }}
        >
          <Grid item>
            <NourLogo width="150" height="150" />
          </Grid>
          <Grid item>
            <Typography variant="h3" align="center" className={classes.headers}>
              {' '}
              {mobileTitle}
            </Typography>
            <Typography
              variant="h6"
              className={classes.try}
              align="center"
              gutterBottom
            >
              {' '}
              {intl.formatMessage({ id: 'mainData.firm' })}
            </Typography>
            <Typography variant="h6" className={classes.headers} align="center">
              {' '}
              {intl.formatMessage({ id: 'mainData.slogan' })}
            </Typography>
          </Grid>
          <Grid item>
            <div className={classes.heroButtons}>
              <ActionButtons />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default MobileHero
