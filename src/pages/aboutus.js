import React from 'react'

import SEO from '../components/seo'
import Layout from '../components/Layout/Layout'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { Grid } from '@material-ui/core'
import { useIntl } from 'gatsby-plugin-intl'

const useStyles = makeStyles(theme => ({
  root: {},
  background: {
    backgroundColor: '#FBC02D',
    position: 'absolute',

    width: '100%',

    height: '50vh',
    zIndex: -2,
    transform: 'skewY(-15deg)',
    transformOrigin: 'top left',
  },

  title: {
    
    marginTop: theme.spacing(5),
    fontSize: '96px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '45px',
    },
  },
  subTitle: {
    fontSize: '20px',
    // fontFamily: 'open sans',
    
    width: '70vh',
    alignSelf: 'center',
    fontWeight: 600,
    lineHeight: '2rem',
    marginBottom: '5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      padding: '10px',
      width: '100%',
      marginBottom: theme.spacing(5),
    },
  },
  try:{
    color: "black"
  }
}))

const AboutusPage = () => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <div>
      <Layout>
        <SEO title={intl.formatMessage({ id: "navs.aboutus" })} />
        <div className={classes.background} />
        <Grid
          container
          justify="center"
          direction="column"
          alignItems="center"
          style={{ marginTop: '7rem' }}
        >
          <Grid item>
            {' '}
            <Typography
              variant="h1"
              align="center"
              
              className={classes.title}
            >
              {intl.formatMessage({id: "mainData.nour"})}
            </Typography>
            <Typography
              variant="h4"
              className={classes.try}
              align="center"
              gutterBottom
            >
              {' '}
              {intl.formatMessage({ id: "mainData.firm" })}
            </Typography>
          </Grid>
          <div style={{paddingTop: "8rem"}}/>
          <Grid item>
              <Typography variant="h5"
              gutterBottom
              
              >{intl.formatMessage({ id: "mainData.mission" })}</Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              align="center"
              className={classes.subTitle}
            >
              {intl.formatMessage({ id: "aboutus.body" })}
            </Typography>
          </Grid>
          <Grid item style={{ width: '100%' }}>
            {' '}
          </Grid>

         
        </Grid>
      </Layout>
    </div>
  )
}

export default AboutusPage
