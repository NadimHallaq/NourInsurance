import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Typography from '../MainTitle'
import { useIntl } from 'gatsby-plugin-intl'

import { Reason } from '../HomePage/WhyNour'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(8),
  },
}))

const WhatsIncluded = ({ reasons, addons }) => {
  const intl = useIntl()
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <Typography
          marked="center"
          variant="h2"
          align="center"
          gutterBottom
          className={classes.root}
        >
          {intl.formatMessage({ id: 'mainData.WhatsIncluded' })}
        </Typography>
        <Grid container spacing={2} justify="center">
          {reasons.map(reason => {
            return (
              <Grid item lg={6}>
                <Reason
                  icon={reason.icon}
                  title={reason.title}
                  description={reason.description}
                />
              </Grid>
            )
          })}
        </Grid>
        <Typography
          marked="center"
          variant="h2"
          align="center"
          gutterBottom
          className={classes.root}
        >
          {intl.formatMessage({ id: 'mainData.YouCanAlsoAdd' })}
        </Typography>
        <Grid container spacing={2} justify="center">
          {addons.map(addon => {
            return (
              <Grid item lg={3} md={6} sm={12} xs={12}>
                <Reason
                  icon={addon.icon}
                  title={addon.title}
                  description={addon.description}
                />
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </div>
  )
}

export default WhatsIncluded
