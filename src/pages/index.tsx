import * as React from 'react'
import { Layout } from '../layout/Layout'
import Seo from '../components/Seo'

const IndexPage = () => (
  <Layout location="Home" background={false}>
    <Seo title="Home" />
  </Layout>
)

export default IndexPage
