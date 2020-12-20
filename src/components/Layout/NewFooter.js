import React from 'react'
import { Typography, Button, Container, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt'
import { Link, useIntl } from 'gatsby-plugin-intl'
import PhoneIcon from '@material-ui/icons/Phone'
import Fab from '@material-ui/core/Fab'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { NourLogo } from '../icons/NourLogo'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    height: '100%',
  },
  container: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
  paper: {
    padding: theme.spacing(1),

    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  footerLink: {
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.primary.main,
      backgroundColor: 'white',
    },
  },
  logo: {
    textAlign: 'center',
  },
}))

function Copyright() {
  return (
    <Typography variant="body2" color="primary" align="center">
      {'Copyright © '}
      <Link href="https://nourassurance.com/" style={{ color: 'white' }}>
        Nour Assurance
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const styles = {
  footerLink: {
    textDecoration: 'none',
    '&:hover': {
      color: 'white',
    },
  },
}

const FooterTitle = ({ title, destination }) => (
  <div>
    <Typography
      color="primary"
      variant="h5"
      gutterBottom
      component={Link}
      to={destination}
      style={styles.footerLink}
    >
      {title}
    </Typography>
  </div>
)

const SocialLinks = () => (
  <div style={{ marginTop: '1rem' }}>
    <Fab
      color="primary"
      aria-label="instagram"
      size="medium"
      style={{ marginRight: '1rem' }}
      component={OutboundLink}
      target="_blank"
      href="https://www.instagram.com/nour.assurance/"
    >
      <InstagramIcon />
    </Fab>
    <Fab
      color="primary"
      aria-label="facebook"
      size="medium"
      component={OutboundLink}
      style={{ marginRight: '1rem' }}
      target="_blank"
      href="https://www.facebook.com/nourassurance/"
    >
      <FacebookIcon />
    </Fab>
    <Fab
      color="primary"
      aria-label="linkedIn"
      size="medium"
      component={OutboundLink}
      style={{ marginRight: '1rem' }}
      target="_blank"
      href="https://www.linkedin.com/company/nour-assurance/?viewAsMember=true"
    >
      <LinkedInIcon />
    </Fab>
  </div>
)

const NewFooter = () => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <div className={classes.root}>
      <Container maxWidth="lg" className={classes.container}>
        <div className={classes.logo}>
          <NourLogo width="100" height="100" />
          <Typography variant="h4" align="center" color="primary">
            {intl.formatMessage({ id: 'mainData.nour' })}
          </Typography>
          <Typography
            variant="h6"
            align="center"
            gutterBottom
            style={{
              fontFamily: 'Open Sans',
              color: 'white',
              paddingBottom: '2rem',
            }}
          >
            {intl.formatMessage({ id: 'mainData.firm' })}
          </Typography>
        </div>

        <Grid container spacing={3}>
          <Grid item lg={7} md={8} sm={12} xs={12}>
            <Typography variant="h4" gutterBottom color="primary">
              {intl.formatMessage({ id: 'navs.company' })}
            </Typography>
            <FooterTitle
              title={intl.formatMessage({ id: 'navs.home' })}
              destination="/"
            />
            <FooterTitle
              title={intl.formatMessage({ id: 'navs.aboutus' })}
              destination="/aboutus"
            />
            <FooterTitle
              title={intl.formatMessage({ id: 'services.one' })}
              destination="/auto"
            />
            <FooterTitle
              title={intl.formatMessage({ id: 'services.two' })}
              destination="/home"
            />
            <FooterTitle
              title={intl.formatMessage({ id: 'services.three' })}
              destination="/commercial"
            />
          </Grid>
          <Grid item lg={5} md={4} xs={12}>
            <Typography variant="h4" gutterBottom color="primary">
              {intl.formatMessage({ id: 'form.Contact' })}
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              disableElevation
              target="_blank"
              endIcon={<ArrowRightAltIcon />}
              href="https://www.google.com/maps/place/Nour+-+Bureau+de+Change/@45.5120565,-73.6810646,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9183f8cc86715:0xe82ef361fbd5522d!8m2!3d45.5120528!4d-73.6788706"
            >
              815 Boulevard Décarie, Saint-Laurent, QC H4L 3L7
            </Button>
            <Button
              disableElevation
              color="primary"
              size="large"
              variant="contained"
              style={{ marginTop: '1rem' }}
              endIcon={<PhoneIcon />}
              href="tel:514-744-6668"
            >
              514-744-6668
            </Button>{' '}
            <SocialLinks />
          </Grid>
        </Grid>
      </Container>{' '}
      <div style={{ marginTop: '1rem', paddingBottom: '1rem' }}>
        <Copyright />
      </div>
    </div>
  )
}

export default NewFooter
