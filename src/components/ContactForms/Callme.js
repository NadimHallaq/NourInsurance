import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useForm } from 'react-hook-form'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'
import { NourLogo } from '../icons/NourLogo'
import { Container } from '@material-ui/core'
import { useIntl } from 'gatsby-plugin-intl'

const useStyles = makeStyles(theme => ({
  callme: {
    textTransform: 'none',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  avatar: {
    margin: theme.spacing(1),
    padding: theme.spacing(4),
    backgroundColor: theme.palette.secondary.main,

    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'center',
  },
}))

const CallMe = ({ color }) => {
  const classes = useStyles()
  const theme = useTheme()
  const intl = useIntl()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = React.useState(false)
  const [thanks, setThanks] = React.useState(false)
  const [time, setTime] = React.useState()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },

    reset,
  } = useForm()

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
    setThanks(true)
    setTime(data.time)
    reset()
  }

  const handleClickOpen = () => {
    setOpen(true)
    trackCustomEvent({
      category: 'Call me option',
      action: 'click',
      label: 'Google analytics custom Modal',
    })
  }

  const handleClose = () => {
    setOpen(false)
  }

  const ShowThankyou = ({ time }) => {
    return (
      <Typography variant="h5" align="center">
        {intl.formatMessage({ id: 'form.calltitle' })}{' '}
        <span style={{ color: '#4caf50' }}>{time}</span>
      </Typography>
    )
  }

  return (
    <div>
      <Button
        color="primary"
        onClick={handleClickOpen}
        variant="contained"
        size="large"
        disableElevation
        className={classes.callme}
      >
        {intl.formatMessage({ id: 'navs.callme' })}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="Nour-Insurance-Call-me-form"
        fullScreen={fullScreen}
        elevation={10}
      >
        <DialogTitle
          id="Nour-Insurance-Call-me-form"
          color="primary"
          align="center"
        >
          {intl.formatMessage({ id: 'mainData.nour' })}
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" style={{ fontSize: '14px' }}>
            {intl.formatMessage({ id: 'form.title' })}
          </DialogContentText>
          <div style={{ textAlign: 'center' }}>
            <NourLogo width="60" height="60" />
            <Typography component="h1" variant="h5">
              {intl.formatMessage({ id: 'form.Contact' })}
            </Typography>
          </div>

          {thanks === false ? (
            <form
              className={classes.container}
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <Container maxWidth="md">
                <Grid
                  container
                  justify="center"
                  direction="column"
                  spacing={2}
                  style={{ paddingTop: '1rem' }}
                >
                  <Grid item lg={12} md={12} xs={12}>
                    <Typography
                      variant="h5"
                      align="center"
                      guttenBottom
                      style={{ paddingBottom: '1rem' }}
                    >
                      {intl.formatMessage({ id: 'form.callmeat' })}
                    </Typography>
                  </Grid>
                  <Grid item lg={12} md={12} xs={12} sm={12}>
                    <TextField
                      id="time"
                      label={intl.formatMessage({ id: 'form.callme' })}
                      type="time"
                      fullWidth
                      defaultValue={new Date()}
                      variant="outlined"
                      name="time"
                      inputRef={register}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        step: 300, // 5 min
                      }}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      autoComplete="fname"
                      name="name"
                      variant="outlined"
                      color="secondary"
                      required
                      id="firstName"
                      label={intl.formatMessage({ id: 'form.first' })}
                      fullWidth
                      inputRef={register}
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item lg={12} md={12} xs={12} sm={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="phoneNumber"
                      label={intl.formatMessage({ id: 'form.phone' })}
                      name="phoneNumber"
                      inputRef={register}
                      autoComplete="phoneNumber"
                      disabled={isSubmitting}
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <Button
                      fullWidth
                      color="secondary"
                      type="submit"
                      variant="contained"
                      style={{
                        color: '#FBC02D',
                        marginTop: '3rem',
                        alignSelf: 'flex-end',
                      }}
                    >
                      {intl.formatMessage({ id: 'form.submit' })}
                    </Button>
                  </Grid>
                </Grid>
              </Container>
            </form>
          ) : (
            <ShowThankyou time={time} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" fullWidth>
            {intl.formatMessage({ id: 'form.cancel' })}
          </Button>
        </DialogActions>
      </Dialog>{' '}
    </div>
  )
}

export default CallMe
