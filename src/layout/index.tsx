import * as React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Background } from './Background'
import { useStaticQuery, graphql } from 'gatsby'
import classNames from 'classnames'

type Props = {
  children: any
  location: string
  background?: boolean
  liquid?: boolean
}

const Layout = ({ children, location, background, liquid }: Props) => {
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
      <Navbar hasBackground={background} location={location} title={data.site.siteMetadata?.title} />
      {background && <Background globs={false} />}
      {background ? (
        <div className="z-10 my-auto">{children}</div>
      ) : (
        <div
          className={classNames(
            liquid
              ? 'min-h-adjusted container z-10 mx-auto my-auto flex max-w-8xl flex-col items-center justify-center'
              : 'min-h-adjusted container z-10 mx-auto my-auto flex max-w-7xl flex-col items-center justify-center'
          )}
        >
          {children}
        </div>
      )}
      <Footer siteTitle={data.site.siteMetadata?.title} />
    </div>
  )
}

Layout.defaultProps = {
  location: 'Unknown',
  background: false,
  liquid: false,
}

export default Layout
