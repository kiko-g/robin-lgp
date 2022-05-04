import * as React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ComingSoon } from '../layout/ComingSoon'

const IndexPage = () => (
  <Layout location="Home" background={false}>
    <Seo title="Home" />
    <div className="flex w-full flex-col items-center justify-center">
      <ComingSoon />
    </div>
  </Layout>
)

export default IndexPage
