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
import { Civil, Add, FireTHeft } from '../components/icons/AutoIcons'
import { Umbrella, Money, MoreMoney } from '../components/icons/CommercialIcons'

import {
  Additional,
  SewerBackup,
  Earthquake,
  Flooding,
  Building,
} from '../components/icons/HomeIcons'

import {
  Pills,
  Tooth,
  CheckUp,
  Contact,
  Polish,
  Emergency,
  CallAnytime,
} from '../components/icons/Health'

import VisibilityIcon from '@material-ui/icons/Visibility'
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh'
import AppsIcon from '@material-ui/icons/Apps'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
const Health = () => {
  const intl = useIntl()
  const data = useStaticQuery(
    graphql`
      query {
        Main: file(relativePath: { eq: "health.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  )

  const healthInsuranceTypes = [
    {
      icon: <Pills />,
      name: <FormattedMessage id="HealthTypes.One.name" />,
    },
    {
      icon: <VisibilityIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="HealthTypes.Two.name" />,
    },
    {
      icon: <Tooth />,
      name: <FormattedMessage id="HealthTypes.Three.name" />,
    },
  ]

  const reasonsk = [
    {
      icon: <Pills />,
      title: <FormattedMessage id="HealthReasons.One.name" />,
      description: <FormattedMessage id="HealthReasons.One.body" />,
    },
    {
      icon: <CheckUp />,
      title: <FormattedMessage id="HealthReasons.Two.name" />,
      description: <FormattedMessage id="HealthReasons.Two.body" />,
    },
    {
      icon: <Contact />,
      title: <FormattedMessage id="HealthReasons.Three.name" />,
      description: <FormattedMessage id="HealthReasons.Three.body" />,
    },
    {
      icon: <Building />,
      title: <FormattedMessage id="HealthReasons.Four.name" />,
      description: <FormattedMessage id="HealthReasons.Four.body" />,
    },
    {
      icon: <Civil />,
      title: <FormattedMessage id="HealthReasons.Five.name" />,
      description: <FormattedMessage id="HealthReasons.Five.body" />,
    },
    {
      icon: <Umbrella />,
      title: <FormattedMessage id="HealthReasons.Six.name" />,
      description: <FormattedMessage id="HealthReasons.Six.body" />,
    },
  ]

  const addons = [
    {
      icon: <Emergency />,

      title: <FormattedMessage id="HealthAddons.One.name" />,
      description: <FormattedMessage id="HealthAddons.One.body" />,
    },
    {
      icon: (
        <BrightnessHighIcon style={{ fontSize: '100px', color: '#4CAF50' }} />
      ),
      title: <FormattedMessage id="HealthAddons.Two.name" />,
      description: <FormattedMessage id="HealthAddons.Two.body" />,
    },
    {
      icon: <AppsIcon style={{ fontSize: '100px', color: '#4CAF50' }} />,
      title: <FormattedMessage id="HealthAddons.Three.name" />,
      description: <FormattedMessage id="HealthAddons.Three.body" />,
    },
    {
      icon: <CallAnytime />,

      title: <FormattedMessage id="HealthAddons.Four.name" />,
      description: <FormattedMessage id="HealthAddons.Four.body" />,
    },
    {
      icon: <VisibilityIcon style={{ fontSize: '100px', color: '#4CAF50' }} />,

      title: <FormattedMessage id="HealthAddons.Five.name" />,
      description: <FormattedMessage id="HealthAddons.Five.body" />,
    },
    {
      icon: (
        <LocalHospitalIcon style={{ fontSize: '100px', color: '#4CAF50' }} />
      ),
      title: <FormattedMessage id="HealthAddons.Six.name" />,
      description: <FormattedMessage id="HealthAddons.Six.body" />,
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'sr.ht' })} />
      <FrontPage
        title={intl.formatMessage({ id: 'sr.ht' })}
        media={data.Main.childImageSharp.fluid}
        mobileMedia={data.Main.childImageSharp.fluid}
        mobileTitle={intl.formatMessage({ id: 'sr.ht' })}
      />

      <Types
        type={intl.formatMessage({ id: 'mainData.health' })}
        typearray={healthInsuranceTypes}
      />
      <WhatsIncluded reasons={reasonsk} addons={addons} />
    </Layout>
  )
}

export default Health
