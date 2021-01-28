import React from 'react'

import Layout from '../components/Layout/Layout'

import { graphql, useStaticQuery } from 'gatsby'

import Types from '../components/pageComponents/Types'
import SEO from '../components/seo'
import { useIntl, FormattedMessage } from 'gatsby-plugin-intl'
import WhatsIncluded from '../components/pageComponents/WhatsIncluded'
import FrontPage from '../components/HomePage/FrontPage'

import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded'
import AllInclusiveRoundedIcon from '@material-ui/icons/AllInclusiveRounded'
import TimelineIcon from '@material-ui/icons/Timeline'

import { Civil, Add } from '../components/icons/AutoIcons'
import { Umbrella, MoreMoney } from '../components/icons/CommercialIcons'

import { Additional } from '../components/icons/HomeIcons'

import {
  GuaranteedInsurability,
  CriticalIllnesses,
  Waiver,
  Death,
  Heal,
  Baby,
  Convert,
  Increase,
} from '../components/icons/LifeIcons'

const Life = () => {
  const intl = useIntl()
  const data = useStaticQuery(
    graphql`
      query {
        Main: file(relativePath: { eq: "life.jpg" }) {
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
      icon: <AllInclusiveRoundedIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="LifeTypes.One.name" />,
    },
    {
      icon: <HourglassEmptyRoundedIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="LifeTypes.Two.name" />,
    },
    {
      icon: <TimelineIcon style={{ fontSize: '100px' }} />,
      name: <FormattedMessage id="LifeTypes.Three.name" />,
    },
  ]

  const reasonsk = [
    {
      icon: <Civil />,
      title: <FormattedMessage id="LifeReasons.One.name" />,
      description: <FormattedMessage id="LifeReasons.One.body" />,
    },
    {
      icon: <Increase />,
      title: <FormattedMessage id="LifeReasons.Two.name" />,
      description: <FormattedMessage id="LifeReasons.Two.body" />,
    },
    {
      icon: <Additional />,
      title: <FormattedMessage id="LifeReasons.Three.name" />,
      description: <FormattedMessage id="LifeReasons.Three.body" />,
    },
    {
      icon: <Convert />,
      title: <FormattedMessage id="LifeReasons.Four.name" />,
      description: <FormattedMessage id="LifeReasons.Four.body" />,
    },
    {
      icon: <Umbrella />,
      title: <FormattedMessage id="LifeReasons.Five.name" />,
      description: <FormattedMessage id="LifeReasons.Five.body" />,
    },
  ]

  const addons = [
    {
      icon: <GuaranteedInsurability />,
      title: <FormattedMessage id="LifeAddons.One.name" />,
      description: <FormattedMessage id="LifeAddons.One.body" />,
    },
    {
      icon: <Heal />,
      title: <FormattedMessage id="LifeAddons.Two.name" />,
      description: <FormattedMessage id="LifeAddons.Two.body" />,
    },
    {
      icon: <CriticalIllnesses />,
      title: <FormattedMessage id="LifeAddons.Three.name" />,
      description: <FormattedMessage id="LifeAddons.Three.body" />,
    },
    {
      icon: <Death />,
      title: <FormattedMessage id="LifeAddons.Four.name" />,
      description: <FormattedMessage id="LifeAddons.Four.body" />,
    },
    {
      icon: <Waiver />,
      title: <FormattedMessage id="LifeAddons.Five.name" />,
      description: <FormattedMessage id="LifeAddons.Five.body" />,
    },
    {
      icon: <Baby />,
      title: <FormattedMessage id="LifeAddons.Six.name" />,
      description: <FormattedMessage id="LifeAddons.Six.body" />,
    },
    {
      icon: <MoreMoney />,
      title: <FormattedMessage id="LifeAddons.Seven.name" />,
      description: <FormattedMessage id="LifeAddons.Seven.body" />,
    },
    {
      icon: <Add />,
      title: <FormattedMessage id="ComAddons.Eight.name" />,
      description: <FormattedMessage id="ComAddons.Eight.body" />,
    },
  ]

  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'services.four' })} />
      <FrontPage
        title={intl.formatMessage({ id: 'services.four' })}
        media={data.Main.childImageSharp.fluid}
        mobileMedia={data.Main.childImageSharp.fluid}
        mobileTitle={intl.formatMessage({ id: 'services.four' })}
      />

      <Types
        type={intl.formatMessage({ id: 'mainData.life' })}
        typearray={comInsuranceTypes}
      />
      <WhatsIncluded reasons={reasonsk} addons={addons} />
    </Layout>
  )
}

export default Life
