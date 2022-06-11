import * as React from 'react'

export default function Hero() {
  return (
    <div className="min-h-adjusted mx-auto flex max-w-4xl flex-col items-center justify-center space-y-8 px-4 font-headings">
      <h1 className="text-center text-5xl font-semibold leading-tight text-white xl:text-6xl">
        Virtual Assistant of Tomorrow.
      </h1>
      <h4 className="max-w-2xl text-center text-lg font-normal text-gray-200 xl:text-xl">
        We're empowering tech users and tech companies to level up interaction with software.
      </h4>
    </div>
  )
}
