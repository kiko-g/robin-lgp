import * as React from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Layout from '../layout'

const IndexPage = () => {
  return (
    <Layout location="Home" background={true}>
      <Seo title="Home" />
      <Hero />
    </Layout>
  )
}

export default IndexPage
