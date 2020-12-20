import React from 'react'
import Grid from '@material-ui/core/Grid'
import GetQuote from '../ContactForms/GetQuote'
import CallMe from '../ContactForms/Callme'

const ActionButtons = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Grid item>
        <GetQuote />
      </Grid>
      <Grid item>
        <CallMe />
      </Grid>
    </Grid>
  )
}

export default ActionButtons
