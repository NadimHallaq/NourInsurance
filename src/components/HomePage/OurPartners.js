import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../MainTitle'

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
}))

const OurPartners = () => {
  const classes = useStyles()

  return (
    <div>
      <Typography
        className={classes.root}
        variant="h3"
        marked="center"
        align="center"
        component="h2"
        color="secondary"
      >
        Ou Partners
      </Typography>
    </div>
  )
}

export default OurPartners
