import * as React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ComingSoon } from '../layout/ComingSoon'

const ValuesPage = () => (
  <Layout location="Values">
    <Seo title="Values" />
    <div className="flex w-full flex-col items-center justify-center">
      <ComingSoon />
    </div>
  </Layout>
)

export default ValuesPage
