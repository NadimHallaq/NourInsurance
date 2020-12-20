import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout/Layout'
import Types from '../components/pageComponents/Types'
import WhatsIncluded from '../components/pageComponents/WhatsIncluded'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import SEO from '../components/seo'
import FrontPage from '../components/HomePage/FrontPage'
//icons
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat'
import DriveEtaIcon from '@material-ui/icons/DriveEta'
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import {
  Civil,
  FireTHeft,
  Collision,
  RentalCar,
  ClaimForgiveness,
  Assistance,
  Replace,
  Add,
} from '../components/icons/AutoIcons'

const Auto = () => {
  const intl = useIntl()
  const data = useStaticQuery(
    graphql`
      query {
        Main: file(relativePath: { eq: "autoImage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const carInsuranceTypes = [
    {
      icon: <DriveEtaIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="AutoTypes.One.name" />,
    },
    {
      icon: <DirectionsBoatIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="AutoTypes.Two.name" />,
    },
    {
      icon: <MotorcycleIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="AutoTypes.Three.name" />,
    },
  ]

  const reasons = [
    {
      icon: <Civil />,
      title: <FormattedMessage id="AutoReasons.One.name" />,
      description: <FormattedMessage id="AutoReasons.One.body" />,
    },
    {
      icon: <FireTHeft />,
      title: <FormattedMessage id="AutoReasons.Two.name" />,
      description: <FormattedMessage id="AutoReasons.Two.body" />,
    },
    {
      icon:  <RentalCar />,
      title: <FormattedMessage id="AutoReasons.Three.name" />,
      description: <FormattedMessage id="AutoReasons.Three.body" />,
    },
    {
      icon: <Collision /> ,
      title: <FormattedMessage id="AutoReasons.Four.name" />,
      description: <FormattedMessage id="AutoReasons.Four.body" />,
    },
  ]

  const addons = [
    {
      icon: <ClaimForgiveness />,
      title: <FormattedMessage id="AutoAddons.One.name" />,
      description: <FormattedMessage id="AutoAddons.One.body" />,
    },
    {
      icon: <Assistance />,
      title: <FormattedMessage id="AutoAddons.Two.name" />,
      description: <FormattedMessage id="AutoAddons.Two.body" />,
    },
    {
      icon: <Replace />,
      title: <FormattedMessage id="AutoAddons.Three.name" />,
      description: <FormattedMessage id="AutoAddons.Three.body" />,
    },
    {
      icon: <Add />,
      title: <FormattedMessage id="AutoAddons.Four.name" />,
      description: <FormattedMessage id="AutoAddons.Four.body" />,
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "services.one" })} />
      <FrontPage
        title={intl.formatMessage({ id: 'services.one' })}
        media={data.Main.childImageSharp.fluid}
        mobileMedia={data.Main.childImageSharp.fluid}
        mobileTitle={intl.formatMessage({ id: 'services.one' })}
      />
      <Types type={intl.formatMessage({ id: 'mainData.auto' })} typearray={carInsuranceTypes} />
      <WhatsIncluded reasons={reasons} addons={addons} />
    </Layout>
  )
}

export default Auto
