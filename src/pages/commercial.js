import React from 'react'

import Layout from '../components/Layout/Layout'

import { graphql, useStaticQuery } from 'gatsby'

import Types from '../components/pageComponents/Types'
import ApartmentIcon from '@material-ui/icons/Apartment'
import SEO from '../components/seo'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import WhatsIncluded from '../components/pageComponents/WhatsIncluded'
import FrontPage from '../components/HomePage/FrontPage'
import StorefrontIcon from '@material-ui/icons/Storefront';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import { Civil, Add, FireTHeft } from '../components/icons/AutoIcons'
import { Error, CommercialCar, Umbrella, Money, MoreMoney, Glass } from "../components/icons/CommercialIcons"

import {

  Additional,

  SewerBackup,

  Earthquake,
  Flooding,
 
} from '../components/icons/HomeIcons'




const Commercial = () => {
  const intl = useIntl()
  const data = useStaticQuery(
    graphql`
      query {
        Main: file(relativePath: { eq: "city.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const comInsuranceTypes = [
    {
      icon: <ApartmentIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="ComTypes.One.name" />,
    },
    {
      icon: <RoomServiceIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="ComTypes.Two.name" />,
    },
    {
      icon: <StorefrontIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="ComTypes.Three.name" />,
    },
  ]

  const reasons = [
    {
      icon: <Civil/>,
      title: <FormattedMessage id="ComReasons.One.name" />,
      description: <FormattedMessage id="ComReasons.One.body" />,
    },
    {
      icon: <FireTHeft/>,
      title: <FormattedMessage id="ComReasons.Two.name" />,
      description: <FormattedMessage id="ComReasons.Two.body" />,
    },
    {
      icon: <Additional/>,
      title: <FormattedMessage id="ComReasons.Three.name" />,
      description: <FormattedMessage id="ComReasons.Three.body" />,
    },
    {
      icon: <CommercialCar/>,
      title: <FormattedMessage id="ComReasons.Four.name" />,
      description: <FormattedMessage id="ComReasons.Four.body" />,
    },
    {
      icon: <Umbrella/>,
      title: <FormattedMessage id="ComReasons.Five.name" />,
      description: <FormattedMessage id="ComReasons.Five.body" />,
    },
  ]

  const addons = [
    {
      icon: <Money/>,
      title: <FormattedMessage id="ComAddons.One.name" />,
      description: <FormattedMessage id="ComAddons.One.body" />,
    },
    {
      icon: <Flooding />,
      title: <FormattedMessage id="ComAddons.Two.name" />,
      description: <FormattedMessage id="ComAddons.Two.body" />,
    },
    {
      icon: <Earthquake />,
      title: <FormattedMessage id="ComAddons.Three.name" />,
      description: <FormattedMessage id="ComAddons.Three.body" />,
    },
    {
      icon: <SewerBackup />,
      title: <FormattedMessage id="ComAddons.Four.name" />,
      description: <FormattedMessage id="ComAddons.Four.body" />,
    },
    {
      icon: <Error/>,
      title: <FormattedMessage id="ComAddons.Five.name" />,
      description: <FormattedMessage id="ComAddons.Five.body" />,
    },
    {
      icon: <MoreMoney/>,
      title: <FormattedMessage id="ComAddons.Six.name" />,
      description: <FormattedMessage id="ComAddons.Six.body" />,
    },
    {
      icon: <Glass/>,
      title: <FormattedMessage id="ComAddons.Seven.name" />,
      description: <FormattedMessage id="ComAddons.Seven.body" />,
    },
    {
      icon: <Add/>,
      title: <FormattedMessage id="ComAddons.Eight.name" />,
      description: <FormattedMessage id="ComAddons.Eight.body" />,
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "services.three" })} />
      <FrontPage
        title={intl.formatMessage({ id: 'services.three' })}
        media={data.Main.childImageSharp.fluid}
        mobileMedia={data.Main.childImageSharp.fluid}
        mobileTitle={intl.formatMessage({ id: 'services.three' })}
      />

      <Types type={intl.formatMessage({ id: 'mainData.commercial' })} typearray={comInsuranceTypes} />
      <WhatsIncluded reasons={reasons} addons={addons} />
    </Layout>
  )
}

export default Commercial
