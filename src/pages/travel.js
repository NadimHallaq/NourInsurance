import React from 'react'

import Layout from '../components/Layout/Layout'

import { graphql, useStaticQuery } from 'gatsby'

import Types from '../components/pageComponents/Types'
import ApartmentIcon from '@material-ui/icons/Apartment'
import SEO from '../components/seo'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import WhatsIncluded from '../components/pageComponents/WhatsIncluded'
import FrontPage from '../components/HomePage/FrontPage'
import StorefrontIcon from '@material-ui/icons/Storefront'
import RoomServiceIcon from '@material-ui/icons/RoomService'
import { Civil, Add } from '../components/icons/AutoIcons'
import {
  Error,
  CommercialCar,
  Umbrella,
  Money,
} from '../components/icons/CommercialIcons'

import {
  Additional,
  SewerBackup,
  Earthquake,
  Flooding,
} from '../components/icons/HomeIcons'

import { Death, GuaranteedInsurability } from '../components/icons/LifeIcons'

import HealingIcon from '@material-ui/icons/Healing'
import EmojiTransportationIcon from '@material-ui/icons/EmojiTransportation'
import SecurityIcon from '@material-ui/icons/Security'
import FastfoodIcon from '@material-ui/icons/Fastfood'
import { Ambulance, Bags, Cancel } from '../components/icons/Travel'
const Travel = () => {
  const intl = useIntl()
  const data = useStaticQuery(
    graphql`
      query {
        Main: file(relativePath: { eq: "travel.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const travelInsuranceTypes = [
    {
      icon: <HealingIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="TravelTypes.One.name" />,
    },
    {
      icon: <EmojiTransportationIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="TravelTypes.Two.name" />,
    },
    {
      icon: <SecurityIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="TravelTypes.Three.name" />,
    },
  ]

  const reasons = [
    {
      icon: <Additional />,
      title: <FormattedMessage id="TravelReasons.One.name" />,
      description: <FormattedMessage id="TravelReasons.One.body" />,
    },
    {
      icon: <Cancel />,
      title: <FormattedMessage id="TravelReasons.Two.name" />,
      description: <FormattedMessage id="TravelReasons.Two.body" />,
    },
    {
      icon: <Bags />,
      title: <FormattedMessage id="TravelReasons.Three.name" />,
      description: <FormattedMessage id="TravelReasons.Three.body" />,
    },
    {
      icon: <Ambulance />,
      title: <FormattedMessage id="TravelReasons.Four.name" />,
      description: <FormattedMessage id="TravelReasons.Four.body" />,
    },
  ]

  const addons = [
    {
      icon: <Money />,
      title: <FormattedMessage id="TravelAddons.One.name" />,
      description: <FormattedMessage id="TravelAddons.One.body" />,
    },
    {
      icon: <GuaranteedInsurability />,
      title: <FormattedMessage id="TravelAddons.Two.name" />,
      description: <FormattedMessage id="TravelAddons.Two.body" />,
    },
    {
      icon: <Death />,
      title: <FormattedMessage id="TravelAddons.Three.name" />,
      description: <FormattedMessage id="TravelAddons.Three.body" />,
    },
    {
      icon: <Add />,
      title: <FormattedMessage id="TravelAddons.Four.name" />,
      description: <FormattedMessage id="TravelAddons.Four.body" />,
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'sr.tr' })} />
      <FrontPage
        title={intl.formatMessage({ id: 'sr.tr' })}
        media={data.Main.childImageSharp.fluid}
        mobileMedia={data.Main.childImageSharp.fluid}
        mobileTitle={intl.formatMessage({ id: 'sr.tr' })}
      />
      <Types
        type={intl.formatMessage({ id: 'mainData.travel' })}
        typearray={travelInsuranceTypes}
      />
      <WhatsIncluded reasons={reasons} addons={addons} />
    </Layout>
  )
}

export default Travel
