import * as React from 'react'
import Seo from '../components/Seo'
import { Layout } from '../layout/Layout'
import { ComingSoon } from '../layout/ComingSoon'

const ContactsPage = () => (
  <Layout location="Contacts">
    <Seo title="Contacts" />
    <div className="flex w-full flex-col items-center justify-center">
      <ComingSoon />
    </div>
  </Layout>
)

export default ContactsPage
