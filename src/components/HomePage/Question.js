import React from 'react'
import { makeStyles, useTheme } from '@material-ui/styles'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'
import Grid from '@material-ui/core/Grid'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useIntl } from 'gatsby-plugin-intl'
import { useForm } from 'react-hook-form'

import Typography from '../MainTitle'
const useStyles = makeStyles(theme => ({
  root: {
    dispaly: 'flex',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  formWrapper: {
    padding: theme.spacing(9),
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
    },
  },
  cardContent: {
    maxWidth: 400,
  },
  textField: {
    width: '100%',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  submit: {
    width: '100%',
    color: theme.palette.primary.main,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    position: 'absolute',
    zIndex: -2,
    top: -20,
    down: 0,
    right: 0,
    left: -30,
  },
}))

export const Question = () => {
  const classes = useStyles()
  const theme = useTheme()
  const intl = useIntl()
  const { register, reset, handleSubmit } = useForm()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const data = useStaticQuery(
    graphql`
      query {
        Image: file(relativePath: { eq: "getcovered.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const FORM_API =
    'https://h5kcg8ruid.execute-api.us-east-1.amazonaws.com/starter'

  const onSubmit = data => {
    console.log(data)
    try {
      fetch(FORM_API, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
    } catch (error) {
      console.log(error)
    }

    reset()
  }

  return (
    <Container className={classes.root} maxWidth="lg">
      <Grid container maxWidth="lg">
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.formWrapper}
        >
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit(onSubmit)}
          >
            <Typography
              variant={matches ? 'h4' : 'h2'}
              component="h2"
              gutterBottom
            >
              {intl.formatMessage({ id: 'today.one' })} <br />{' '}
              {intl.formatMessage({ id: 'today.two' })} <br />{' '}
              {intl.formatMessage({ id: 'today.three' })}
            </Typography>

            <TextField
              variant="outlined"
              margin="normal"
              color="secondary"
              required
              fullWidth
              id="firstName"
              label={intl.formatMessage({ id: 'form.first' })}
              name="name"
              inputRef={register}
              autoComplete="firstName"
            />
            <TextField
              variant="outlined"
              margin="normal"
              color="secondary"
              required
              fullWidth
              name="phonenumber"
              label={intl.formatMessage({ id: 'form.phone' })}
              type="phonenumber"
              id="phonenumber"
              inputRef={register}
              autoComplete="current-phonenumber"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              {intl.formatMessage({ id: 'form.submit' })}
            </Button>
          </form>
        </Grid>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          className={classes.imageWrapper}
        >
          <Hidden smDown>
            <Img
              fluid={data.Image.childImageSharp.fluid}
              className={classes.image}
            />
          </Hidden>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Question
