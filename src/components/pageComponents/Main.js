import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'
import Img from 'gatsby-image'
const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(10),
    position: 'relative',
    color: theme.palette.common.white,
  },
  mainFeaturedPost: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    boxShadow: theme.shadows[9],
    borderRadius: '25px',
    height: '50vh',
    zIndex: -1,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    down: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
    borderRadius: '25px',
  },
  text: {
    position: 'absolute',
    top: 40,
    down: 0,
    left: 0,
    right: 0,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(3),
    },
  },
  title: {
    fontSize: '55px',

    backgroundColor: theme.palette.secondary.main,
    [theme.breakpoints.down('sm')]: {
      fontSize: '36px',
    },
  },
  subtitle: {
    position: 'relative',
    fontSize: '36px',
    maxWidth: 800,
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
    },
  },
  solution: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
}))

const Main = ({ media, title, description }) => {
  const classes = useStyles()

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Img fluid={media} className={classes.mainFeaturedPost} />

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.text}
      >
        <Grid item>
          <Typography
            align="center"
            className={classes.title}
            gutterBottom
            color="primary"
          >
            {title}
          </Typography>{' '}
          <Typography
            align="center"
            className={classes.subtitle}
            color="primary"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Main
