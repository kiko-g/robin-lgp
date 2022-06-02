import * as React from 'react'
import { socials } from '../utils/data'
import { LogoDark, LogoLight } from '../images'
import { Link } from 'gatsby'
import '../styles/utils.css'

type Props = {
  siteTitle: string
}

export const Footer = ({ siteTitle }: Props) => {
  const footerNav = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/about' },
    { name: 'Blog', route: '/blog' },
    { name: 'Values', route: '/values' },
    { name: 'FAQ', route: '/faq' },
  ]

  return (
    <footer
      className="z-20 mt-8 flex items-center justify-between bg-navy p-2 text-xs 
      text-gray-200 hover:text-white dark:bg-ice dark:text-gray-500 dark:hover:text-gray-700 md:p-3 md:text-sm"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-gray-400">
          <img className="hidden h-16 w-auto object-cover dark:block" src={LogoLight} alt="robin" />
          <img className="block h-16 w-auto object-cover dark:hidden" src={LogoDark} alt="robin" />
        </div>

        <div className="mx-auto mt-6 max-w-md space-y-3 text-center leading-relaxed">
          <p className="max-w-xl">Bringing accessibility and flexibility through technology.</p>
          <p className="font-bold">© 2022 {siteTitle}™</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {footerNav.map((nav, navIdx) => (
            <Link
              key={`footer-nav-${navIdx}`}
              className="text-base font-bold uppercase tracking-tight transition hover:opacity-80"
              to={nav.route}
            >
              {nav.name}
            </Link>
          ))}
        </div>

        <div className="flex justify-center space-x-2 lg:space-x-4">
          {socials
            .filter((social) => social.shown)
            .map((social, socialIdx) => (
              <a
                target="_blank"
                href={social.url}
                key={`social-${socialIdx}`}
                aria-labelledby={social.label}
                className={`transition ${social.label}`}
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox={social.viewBox ? social.viewBox : '0 0 24 24'}
                  aria-hidden="true"
                >
                  {social.svg.map((d, dIdx) => (
                    <path fillRule="evenodd" d={d} clipRule="evenodd" key={`social-${socialIdx}-svg-${dIdx}`} />
                  ))}
                </svg>
              </a>
            ))}
        </div>
      </div>
    </footer>
  )
}
