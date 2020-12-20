import React from 'react'
import SEO from '../components/seo'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/Layout'
import ServicesHero from '../components/HomePage/ServicesHero'
import WhyNour from '../components/HomePage/WhyNour'
import Callus from '../components/HomePage/Callus'
import Question from '../components/HomePage/Question'
import FrontPage from '../components/HomePage/FrontPage'
import { useIntl } from 'gatsby-plugin-intl'

const IndexPage = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      DesktopImage: file(relativePath: { eq: "montreal.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 4700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      MobileImage: file(relativePath: { eq: "mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 740) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div>
      <Layout>
        <SEO title={intl.formatMessage({ id: "mainData.nour" })} />
        <FrontPage
          media={data.DesktopImage.childImageSharp.fluid}
          title={intl.formatMessage({id: "mainData.nour"})}
          mobileTitle={intl.formatMessage({id: "mainData.nour"})}
          mobileMedia={data.MobileImage.childImageSharp.fluid}
        />
        <ServicesHero />
        <WhyNour />
        <Question />
        <Callus />
      </Layout>
    </div>
  )
}

export default IndexPage
