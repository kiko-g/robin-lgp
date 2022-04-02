import * as React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from './Background'
import { useStaticQuery, graphql } from 'gatsby'

type Props = {
  children: any
  location: string
  homepage?: boolean
}

export const Layout: React.FC<Props> = ({ children, location, homepage }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout">
      <Navbar siteTitle={data.site.siteMetadata?.title} location={location} />
      <Background />
      <div className="container z-10 mx-auto my-auto flex">{children}</div>
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
}
