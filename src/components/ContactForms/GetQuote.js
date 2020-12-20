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
import { NourLogo } from '../icons/NourLogo'
import { useIntl } from 'gatsby-plugin-intl'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const useStyles = makeStyles(theme => ({
  getQuote: {
    textTransform: 'none',
  },

  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
}))

const GetQuote = () => {
  const classes = useStyles()
  const theme = useTheme()
  const intl = useIntl()
  const [thanks, setThanks] = React.useState(false)

  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))
  const [open, setOpen] = React.useState(false)
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },

    reset,
  } = useForm()

  const FORM_API =
    'https://h5kcg8ruid.execute-api.us-east-1.amazonaws.com/starter'

  const onSubmit = data => {
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
    reset()
  }

  const handleClickOpen = () => {
    setOpen(true)
    trackCustomEvent({
      category: 'get qoute option',
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
        {intl.formatMessage({ id: 'form.formtitle' })}
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
        className={classes.getQuote}
      >
        {intl.formatMessage({ id: 'form.get' })}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullScreen={fullScreen}
        elevation={10}
      >
        <DialogTitle id="form-dialog-title" color="primary" align="center">
          {intl.formatMessage({ id: 'mainData.nour' })}
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center" style={{ fontSize: '14px' }}>
            {intl.formatMessage({ id: 'form.title' })}
          </DialogContentText>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <NourLogo width="60" height="60" />

            <Typography component="h1" variant="h5">
              {intl.formatMessage({ id: 'form.Contact' })}
            </Typography>
          </div>

          {thanks === false ? (
            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoComplete="fname"
                    name="name"
                    variant="outlined"
                    color="secondary"
                    required
                    fullWidth
                    id="firstName"
                    label={intl.formatMessage({ id: 'form.first' })}
                    inputRef={register}
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label={intl.formatMessage({ id: 'form.last' })}
                    name="lastName"
                    autoComplete="lastname"
                    inputRef={register}
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="email"
                    label={intl.formatMessage({ id: 'form.email' })}
                    name="email"
                    inputRef={register}
                    autoComplete="email"
                    disabled={isSubmitting}
                  />
                </Grid>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    color="secondary"
                    type="submit"
                    variant="contained"
                    style={{ color: '#FBC02D' }}
                    disabled={isSubmitting}
                  >
                    {intl.formatMessage({ id: 'form.submit' })}
                  </Button>
                </Grid>
              </Grid>
            </form>
          ) : (
            <ShowThankyou />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" fullWidth>
            {intl.formatMessage({ id: 'form.cancel' })}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default GetQuote
