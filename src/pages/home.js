import React from 'react'

import Layout from '../components/Layout/Layout'

import { graphql, useStaticQuery } from 'gatsby'

import HomeIcon from '@material-ui/icons/Home'
import Types from '../components/pageComponents/Types'
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople'

import ApartmentIcon from '@material-ui/icons/Apartment'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import WhatsIncluded from '../components/pageComponents/WhatsIncluded'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'

import { Civil, Add } from '../components/icons/AutoIcons'
import SEO from '../components/seo'
import {
  Building,
  Contents,
  Additional,
  Dependance,
  SewerBackup,
  AboveGround,
  IdentityTheft,
  Earthquake,
  Flooding,
  SingleAmount,
} from '../components/icons/HomeIcons'

import FrontPage from '../components/HomePage/FrontPage'
const Home = () => {
  const intl = useIntl()
  const data = useStaticQuery(
    graphql`
      query {
        Main: file(relativePath: { eq: "homeImage.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1440, quality: 95) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        
      }
    `
  )

  const homeInsuranceTypes = [
    {
      icon: <HomeIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="HomeTypes.One" />,
    },
    {
      icon: <ApartmentIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="HomeTypes.Two" />,
    },
    {
      icon: <EmojiPeopleIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="HomeTypes.Three" />,
    },
    {
      icon: <WbSunnyIcon style={{ fontSize: '100px' }} />,
      name:  <FormattedMessage id="HomeTypes.Four" />
    }
  ]

  const reasons = [
    {
      icon: <Civil />,
      title: <FormattedMessage id="HomeReasons.One.name" />,
      description: <FormattedMessage id="HomeReasons.One.body" />,
    },
    {
      icon: <Contents />,
      title: <FormattedMessage id="HomeReasons.Two.name" />,
      description: <FormattedMessage id="HomeReasons.Two.body" />,
    },
    {
      icon: <Additional />,
      title: <FormattedMessage id="HomeReasons.Three.name" />,
      description: <FormattedMessage id="HomeReasons.Three.body" />,
    },
    {
      icon: <Building />,
      title: <FormattedMessage id="HomeReasons.Four.name" />,
      description: <FormattedMessage id="HomeReasons.Four.body" />,
    },
    {
      icon: <Dependance />,
      title: <FormattedMessage id="HomeReasons.Five.name" />,
      description: <FormattedMessage id="HomeReasons.Five.body" />,
    },
  ]

  const addons = [
    {
      icon: <SewerBackup />,
      title: <FormattedMessage id="HomeAddons.One.name" />,
      description: <FormattedMessage id="HomeAddons.One.body" />,
    },
    {
      icon: <AboveGround />,
      title: <FormattedMessage id="HomeAddons.Two.name" />,
      description: <FormattedMessage id="HomeAddons.Two.body" />,
    },
    {
      icon: <IdentityTheft />,
      title: <FormattedMessage id="HomeAddons.Three.name" />,
      description: <FormattedMessage id="HomeAddons.Three.body" />,
    },
    {
      icon: <Earthquake />,
      title: <FormattedMessage id="HomeAddons.Four.name" />,
      description: <FormattedMessage id="HomeAddons.Four.body" />,
    },
    {
      icon: <Flooding />,
      title: <FormattedMessage id="HomeAddons.Five.name" />,
      description: <FormattedMessage id="HomeAddons.Five.body" />,
    },
    {
      icon: <SingleAmount />,
      title: <FormattedMessage id="HomeAddons.Six.name" />,
      description: <FormattedMessage id="HomeAddons.Six.body" />,
    },
    {
      icon: <Add />,
      title: <FormattedMessage id="HomeAddons.Seven.name" />,
      description: <FormattedMessage id="HomeAddons.Seven.body" />,
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "services.two" })}  />

      <FrontPage
        title={intl.formatMessage({ id: 'services.two' })}
        media={data.Main.childImageSharp.fluid}
        mobileMedia={data.Main.childImageSharp.fluid}
        mobileTitle={intl.formatMessage({ id: 'services.two' })}
      />
      <Types type={intl.formatMessage({ id: 'mainData.home' })} typearray={homeInsuranceTypes} />
      <WhatsIncluded reasons={reasons} addons={addons} />
    </Layout>
  )
}

export default Home
