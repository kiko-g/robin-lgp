import * as React from 'react'
import Seo from '../components/Seo'
import Layout from '../layout'
import { LogoDark } from '../images'
import { Story, Purpose, Values, ShowcaseMES } from '../components/about'

const AboutPage = () => (
  <Layout location="About" background>
    <Seo title="About" />

    <div id="hello" className="min-h-adjusted z-20 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 font-headings">
      <img className="h-16 w-auto object-cover lg:h-32" src={LogoDark} alt="robin" />
    </div>

    <div id="content" className="container mx-auto max-w-8xl space-y-8 px-4 py-12 lg:space-y-16 lg:px-8 lg:py-24">
      <ShowcaseMES id="showcase" />
      <Story id="story" />
      <Purpose id="purpose" />
      <Values id="values" />
    </div>
  </Layout>
)

export default AboutPage
