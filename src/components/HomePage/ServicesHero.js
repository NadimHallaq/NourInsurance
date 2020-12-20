import React from 'react'
import Typography from '../MainTitle'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'
import Container from '@material-ui/core/Container'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { FormattedMessage, Link } from 'gatsby-plugin-intl'


const styles = theme => ({
  root: {
    marginTop: theme.spacing(12),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'hidden',
  }, 
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 0,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
})

export const ServicesHero = props => {
  const { classes } = props

  const data = useStaticQuery(
    graphql`
      query {
        auto: file(relativePath: { eq: "auto.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        home: file(relativePath: { eq: "homeImage.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        com: file(relativePath: { eq: "city.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1080) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  console.log(data)

  const images = [
    {
      url: data.auto.childImageSharp.fluid,
      title: <FormattedMessage id="services.one" />,
      width: '50%',
      to: "/auto"
    },
    {
      url: data.home.childImageSharp.fluid,
      title: <FormattedMessage id="services.two" />,
      width: '50%',
      to: "/home"
    },
    {
      url: data.com.childImageSharp.fluid,
      title: <FormattedMessage id="services.three" />,
      width: '100%',
      to: "/commercial"
    },
  ]
  return (
    <Container className={classes.root} maxWidth="xl">
      <Typography
        variant="h3"
        marked="center"
        align="center"
        component="h2"
        color="secondary"
      >
        <FormattedMessage id="mainData.type" />
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            component={Link}
            to={image.to}
            style={{
              width: image.width,
            }}
          >
            <div className={classes.imageSrc}>
              <Img fluid={image.url} />
            </div>

            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h2"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </Container>
  )
}

export default withStyles(styles)(ServicesHero)
