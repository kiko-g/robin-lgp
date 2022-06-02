import React from 'react'
import { Link } from 'gatsby'

export default function SeeMore() {
  return (
    <Link
      className="group relative inline-flex items-center overflow-hidden rounded robin-gradient
      px-8 py-3 text-white focus:outline-none focus:ring"
      to="/about"
    >
      <span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4">
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>

      <span className="text-sm font-medium transition-all group-hover:mr-4">Download</span>
    </Link>
  )
}
