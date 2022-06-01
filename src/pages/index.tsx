import * as React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ComingSoon } from '../layout/ComingSoon'
import Team from '../components/Team'

const IndexPage = () => (
  <Layout location="Home" background={false}>
    <Seo title="Home" />
    <Team />
  </Layout>
)

export default IndexPage
