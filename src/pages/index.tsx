import * as React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { Blobs } from '../layout/Blobs'

const IndexPage = () => (
  <Layout location="Home" background={false}>
    <Seo title="Home" />
    <div className="flex w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-center font-headings text-4xl font-extrabold tracking-tight text-primary dark:text-fifth sm:text-5xl lg:text-6xl">
        Coming soon
      </h1>
      <Blobs />
    </div>
  </Layout>
)

export default IndexPage
