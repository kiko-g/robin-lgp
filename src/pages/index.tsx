import React from 'react'
import Seo from '../components/Seo'
import Layout from '../layout'
import { Hero, Team, SeeMore } from '../components/home'

const IndexPage = () => {
  return (
    <Layout location="Home" background={true}>
      <Seo title="Home" />
      <Hero />

      <div className="mx-4 flex flex-col items-center justify-center py-16 xl:mx-24 xl:py-24">
        <h1 className="mb-6 text-center font-headings text-5xl font-semibold">Our solutions, your choice.</h1>
        <p className="max-w-3xl text-center text-lg font-normal xl:text-lg">
          Switch's microservices architecture allows exposure to our applications independently through different APIs
          on a modular basis. Acquirers can consume specific applications on an à la carte model, allowing them to
          capitalize on existing legacy systems and prepare for the challenges ahead.
        </p>
        <SeeMore />
      </div>

      <div className="divider mx-4 py-16 xl:mx-24 xl:py-24">
        <h1 className="mb-4 font-headings text-4xl font-semibold">Meet our team</h1>
        <Team />
      </div>
    </Layout>
  )
}

export default IndexPage
