import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { FormattedMessage } from 'gatsby-plugin-intl'
import CardContent from '@material-ui/core/CardContent'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

import Typography from '../MainTitle'
import { CallIcon, Comprehensive, Payment, Package, Fast } from '../icons/call'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),

    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    borderRadius: '10px',
    padding: theme.spacing(0),
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.secondary.light,
    boxShadow: '0px 14px 30px RGBA(255,203,24,0.51)',
    transition: '0.3s',
    '&:hover': {
      transform: 'translateY(10px)',
      boxShadow: '0 4px 20px 0 rgba(0,0,0,0.3)',
    },
  },
  mainTitle: {
    color: 'white',
    paddingBottom: theme.spacing(3),
  },
  iconSection: {
    padding: theme.spacing(5),
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    },
  },
  title: {
    color: 'white',
    fontFamily: 'Open Sans',
    fontSize: '24px',
    fontWeight: 700,
    paddingBottom: theme.spacing(3),
  },
  description: {
    fontFamily: 'Open Sans',
    fontSize: '16px',
    color: theme.palette.common.white,
    fontWeight: 700,
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
  },
}))

export const Reason = ({ icon, description, title }) => {
  const classes = useStyles()

  return (
    <CardContent className={classes.paper} elevation={0}>
      <div className={classes.iconSection}>{icon}</div>
      <div className={classes.infosection}>
        <Typography align="center" className={classes.title}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          align="center"
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
    </CardContent>
  )
}

const WhyData = [
  {
    icon: <CallIcon />,
    title: <FormattedMessage id="whyChooseUs.zero.name" />,
    description: <FormattedMessage id="whyChooseUs.zero.body" />,
  },
  {
    icon: <Package />,
    title: <FormattedMessage id="whyChooseUs.one.name" />,
    description: <FormattedMessage id="whyChooseUs.one.body" />,
  },
  {
    icon: <Payment />,
    title: <FormattedMessage id="whyChooseUs.two.name" />,
    description: <FormattedMessage id="whyChooseUs.two.body" />,
  },
  {
    icon: <Fast />,
    title: <FormattedMessage id="whyChooseUs.three.name" />,
    description: <FormattedMessage id="whyChooseUs.three.body" />,
  },
  {
    icon: <Comprehensive />,
    title: <FormattedMessage id="whyChooseUs.four.name" />,
    description: <FormattedMessage id="whyChooseUs.four.body" />,
  },
]

const WhyNour = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          marked="center"
          align="center"
          component="h2"
          className={classes.mainTitle}
        >
          <FormattedMessage id="mainData.whyChooseUs" />
        </Typography>
        <Grid container spacing={2} justify="center">
          {WhyData.map(c => {
            return (
              <Grid item lg={4} md={4} sm={12} xs={12}>
                {' '}
                <Reason
                  icon={c.icon}
                  title={c.title}
                  description={c.description}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default WhyNour
