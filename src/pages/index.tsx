import * as React from 'react'
import Seo from '../components/Seo'
import Layout from '../layout'
import { Hero, Squad, Team, SeeMore } from '../components/home'

const IndexPage = () => {
  return (
    <Layout location="Home" background={true}>
      <Seo title="Home" />
      <Hero />

      <div id="robin" className="mx-4 flex flex-col items-center justify-center space-y-6 py-16 xl:mx-24 xl:py-24">
        <h1 className="text-center font-headings text-5xl font-semibold">Our solutions for your benefit.</h1>
        <p className="max-w-3xl text-center text-lg font-normal xl:text-lg">
          Inspiring text about our products and solutions and how they facilitate interaction with complex software and
          technologies both for regular users and high tech companies. You know the standard. But better.
        </p>
        <SeeMore text="Find out more about us" route="about" />
      </div>

      <div id="team" className="mx-4 space-y-16 py-8 xl:mx-24 xl:py-12">
        <Squad />
        <Team />
      </div>
    </Layout>
  )
}

export default IndexPage
