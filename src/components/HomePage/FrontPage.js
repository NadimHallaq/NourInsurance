import React from 'react'

import Img from 'gatsby-image'

import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, Hidden } from '@material-ui/core'

import MobileHero from './MobileHero'

import { NourLogo } from '../icons/NourLogo'
import ActionButtons from './ActionButtons'
import { useIntl } from 'gatsby-plugin-intl'
const useStyles = makeStyles(theme => ({
  root: {
    
    position: 'relative',
  
  },
  image: {
    
    minHeight: '80vh',
    maxHeight: '100vh',
    zIndex: -1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text: {
    paddingTop: theme.spacing(5),
    minHeight: '80vh',
    backgroundColor: 'rgba(1, 0, 0, 0.6)',
    position: 'absolute',
    // zIndex: 0,
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

const DesktopHero = ({ title, media }) => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <div style={{ position: 'relative', top: 0 }}>
      <Img fluid={media} objectFit="cover" className={classes.image} />
      <div className={classes.text}>
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          style={{ paddingTop: '3rem' }}
        >
          <Grid item>
            <NourLogo width="250" height="250" />
          </Grid>
          <Grid item>
            <Typography variant="h1" className={classes.headers} align="center">
              {' '}
              {title}
            </Typography>
            <Typography
              variant="h5"
              className={classes.try}
              align="center"
              gutterBottom
            >
              {' '} 
              {intl.formatMessage({ id: "mainData.firm" })} 
            </Typography>
         <Grid item>
         <Typography variant="h5" className={classes.headers} align="center">
              {' '}
              {intl.formatMessage({ id: "mainData.slogan" })}
            </Typography>
         </Grid>
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
const FrontPage = ({ title, media, mobileMedia, mobileTitle }) => {
  return (
    <div>
      <Hidden only={['sm', 'xs']}>
        <DesktopHero title={title} media={media} />
      </Hidden>
      <Hidden only={['md', 'lg', 'xl']}>
        <MobileHero mobileMedia={mobileMedia} mobileTitle={mobileTitle} />
      </Hidden>
    </div>
  )
}

export default FrontPage
