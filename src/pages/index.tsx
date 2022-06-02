import * as React from 'react'
import Seo from '../components/Seo'
import Hero from '../components/Hero'
import Layout from '../layout'
import Team from '../components/Team'

const IndexPage = () => {
  return (
    <Layout location="Home" background={true}>
      <Seo title="Home" />
      <Hero />
      <div className="py-16 xl:py-24 px-4 xl:px-24">
        <h1 className="mb-4 font-headings text-4xl font-semibold">Meet our team</h1>
        <Team />
      </div>
    </Layout>
  )
}

export default IndexPage
