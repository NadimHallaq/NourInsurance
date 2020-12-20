import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { Link, useIntl } from 'gatsby-plugin-intl'
import { Button, Grid, Typography, Toolbar } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'

import DriveEtaRoundedIcon from '@material-ui/icons/DriveEtaRounded'
import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import BusinessIcon from '@material-ui/icons/Business'
import PhoneIcon from '@material-ui/icons/Phone'
import PeopleIcon from '@material-ui/icons/People'
import MobileLang from '../MobileLang'
import Quote from '../../ContactForms/GetQuote'
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: 700,
    paddingTop: '1rem',
  },
  drawer: {
    paddingRight: '1rem',
    paddingLeft: '1rem',
    backgroundColor: '#323232',
    paddingBottom: '1rem',
  },
  navButton: {
    fontFamily: 'Open Sans',
    fontWeight: 700,
    fontSize: '14px',
  },
  button: {
    textTransform: 'none',
    fontWeight: 700,
    fontFamily: 'Open Sans',
  },
  IconButton: {
    marginRight: theme.spacing(1),
  },
  tool: {
    ...theme.mixins.toolbar,
  },
}))

const MobileCard = ({ destination, name, icon }) => {
  const classes = useStyles()
  
  return (
    <Button
      component={Link}
      to={destination}
      color="primary"
      variant="contained"
      fullWidth={true}
      startIcon={icon}
      size="large"
      className={classes.button}
    >
      {name}
    </Button>
  )
}

const MobileHeader = () => {
  const classes = useStyles()
  const intl = useIntl()
  const [state, setState] = React.useState({
    top: false,
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }
  return (
    <div>
      <Toolbar className={classes.tool}>
        <IconButton
          fullWidth
          onClick={toggleDrawer('top', true)}
          color="inherit"
          edge="start"
        >
          <MenuIcon size="large" />
        </IconButton>
        <Drawer
          anchor={'top'}
          open={state.top}
          onClose={toggleDrawer('top', false)}
        >
          <Grid container spacing={1} className={classes.drawer}>
            <Grid item sm={12} xs={12}>
              <Typography
                align="center"
                color="primary"
                variant="h6"
                gutterBottom
                className={classes.title}
              >
                {' '}
                {intl.formatMessage({ id: "mainData.nour" })}
              </Typography>
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileCard
                icon={<HomeIcon />}
                name={intl.formatMessage({ id: "navs.home" })}
                HomeRoundedIcon
                destination="/"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileCard
                icon={<DriveEtaRoundedIcon />}
                name={intl.formatMessage({ id: "services.one" })}
                HomeRoundedIcon
                destination="/auto"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileCard
                icon={<HomeRoundedIcon />}
                name={intl.formatMessage({ id: "services.two" })}
                destination="/home"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileCard
                icon={<BusinessIcon />}
                name={intl.formatMessage({ id: "services.three" })}
                destination="/commercial"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileCard icon={<PhoneIcon />} name={'Call Us'} />
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileCard
                icon={<PeopleIcon />}
                name= {intl.formatMessage({ id: "navs.aboutus" })}
                destination="/aboutus"
              />
            </Grid>
            <Grid item sm={12} xs={12}>
              <MobileLang />
            </Grid>
          </Grid>
        </Drawer>
        <div style={{ flexGrow: 1 }} />
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={classes.IconButton}
          startIcon={<PhoneIcon />}
          href="tel:514-744-6668"
        >
          {intl.formatMessage({ id: "navs.call" })}
        </Button>
        <Quote color="primary" />
      </Toolbar>
    </div>
  )
}

export default MobileHeader
