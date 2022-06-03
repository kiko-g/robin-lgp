import * as React from 'react'
import Seo from '../components/Seo'
import Layout from '../layout'
import { LogoDark, LogoLight } from '../images'

const AboutPage = () => (
  <Layout location="About" background>
    <Seo title="About" />

    <div className="min-h-adjusted z-20 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 font-headings">
      <img className="hidden h-16 w-auto object-cover dark:block lg:h-32" src={LogoLight} alt="robin" />
      <img className="block h-16 w-auto object-cover dark:hidden lg:h-32" src={LogoDark} alt="robin" />
    </div>

    <div className="container mx-auto max-w-7xl">
      <div id="story" className="mx-4 flex flex-col items-center justify-center space-y-6 py-8 xl:mx-12 xl:py-16">
        <h1 className="text-center font-headings text-5xl font-semibold">Our Story.</h1>
        <p className="text-center text-lg font-normal xl:text-lg">
          Our company and brand were founded following a project proposal to create an Assistant for Critical
          Manufacturing's MES. We believe Robin is a suitable name because of the symbolism it carries from Batman,
          which has Robin as a sidekick.
        </p>
      </div>

      <div id="purpose" className="mx-4 flex flex-col items-center justify-center space-y-6 py-8 xl:mx-12 xl:py-16">
        <h1 className="text-center font-headings text-5xl font-semibold">Our Purpose.</h1>
        <p className="text-center text-lg font-normal xl:text-lg">
          We aim to improve user experience and accessibility using digital platforms by offering a new concept of
          interface to decrease the communication involved in Human Computer Interaction
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
