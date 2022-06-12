import * as React from 'react'
import Seo from '../components/Seo'
import Layout from '../layout'
import { LogoDark, LogoLight } from '../images'

const AboutPage = () => (
  <Layout location="About" background>
    <Seo title="About" />

    <div className="min-h-adjusted z-20 mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 font-headings">
      <img className="h-16 w-auto object-cover lg:h-32" src={LogoDark} alt="robin" />
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
          interface to decrease the communication involved in Human Computer Interaction. Our customers are the most
          important part for us so, we build a clear, honest and integral relationship with our customers. We are
          ambicious allways searching for more, looking for development and going further. We behave with determination
          to achieve sucess. We are full commited with what we have to do. We want to create our footprint, creating
          impact and value us and all of the community we are connected with. We believe in our potential and learning
          capabilities thus we invest on it.
        </p>
      </div>

      <div id="values" className="mx-4 flex flex-col items-center justify-center space-y-6 py-8 xl:mx-12 xl:py-16">
        <h1 className="text-center font-headings text-5xl font-semibold">Our Values.</h1>
        <p className="text-center text-lg font-normal xl:text-lg">
          We are curious and eager looking to innovate and improve our ideas. We deeply care abouts Robin's success. We
          are are tenacious and optimistic.
        </p>
      </div>
    </div>
  </Layout>
)

export default AboutPage
