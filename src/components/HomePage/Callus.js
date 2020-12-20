import React from 'react'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '../MainTitle'
import { useIntl } from 'gatsby-plugin-intl'
import PhoneIcon from '@material-ui/icons/Phone'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(9),
    paddingBottom: theme.spacing(9),
    backgroundColor: theme.palette.primary.main,
  },
  button: {
    border: '4px solid black',
    borderRadius: 0,

    height: 'auto',
    padding: theme.spacing(2, 5),
  },
  link: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  buoy: {
    width: 60,
  },
}))

const Callus = () => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <div>
      <Container className={classes.root} component="section" maxWidth={false}>
        <Button className={classes.button}>
          <Typography variant="h4" component="span" color="secondary">
            {intl.formatMessage({ id: 'mainData.questions' })}
          </Typography>
        </Button>
        <Typography variant="h5" className={classes.link} color="secondary">
          {intl.formatMessage({ id: 'mainData.callus' })}
        </Typography>
        <Button
          component={Link}
          disableElevation
          color="secondary"
          size="large"
          variant="contained"
          endIcon={<PhoneIcon />}
          href="tel:514-744-6668"
        >
          514-744-6668
        </Button>
      </Container>
    </div>
  )
}

export default Callus
