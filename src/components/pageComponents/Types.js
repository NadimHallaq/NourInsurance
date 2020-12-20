import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Typography from '../MainTitle'
import Avatar from '@material-ui/core/Avatar'
import { Grid, Container, CssBaseline } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  overline: {
    display: 'block',
    textAlign: 'center',
    color: theme.palette.primary.main,
    letterSpacing: '2px',
    fontSize: 14,
    marginTop: 12,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // backgroundColor: 'tomato',
    maxWidth: '300px',
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    lineHeight: 2,
    fontWeight: 300,
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: 'sans pro',
    fontSize: 18,
    color: '#222',
    lineHeight: 1.75,
    width: '88%',
    margin: '0 auto',
  },
  avatar: {
    alignSelf: 'center',
    padding: theme.spacing(12),
    backgroundColor: theme.palette.secondary.main,
    fontSize: '4rem',
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(2),
  },
  try: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
}))

const Team = ({ icon, name, position }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <CssBaseline />
      <Avatar variant="rounded" className={classes.avatar}>
        {icon}
      </Avatar>
      <Typography className={classes.title} gutterBottom>
        {name}
      </Typography>
    </div>
  )
}

const Types = ({ typearray, type }) => {
  const classes = useStyles()
  return (
    <div className={classes.try}>
      <Typography
        marked="center"
        variant="h2"
        align="center"
        gutterBottom
        className={classes.try}
      >
        {type}
      </Typography>
      <Container maxWidth="lg">
        <Grid container justify="center">
          {typearray.map(t => (
            <Grid item lg={3} md={4} sm={12}>
              <Team icon={t.icon} name={t.name} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
}

export default Types
