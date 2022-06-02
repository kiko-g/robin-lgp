import * as React from 'react'
import Layout from '../layout'
import Seo from '../components/Seo'

const NotFoundPage = () => (
  <Layout location="Oops!">
    <Seo title="Oops!" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
