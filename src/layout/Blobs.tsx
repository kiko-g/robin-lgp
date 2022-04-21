import React from 'react'

type Props = {}

export const Blobs = ({}: Props) => {
  return (
    <div className="relative mx-auto w-full max-w-lg">
      <div className="animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full bg-primary opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-4000 absolute -bottom-16 left-20 h-72 w-72 rounded-full bg-secondary opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full bg-third opacity-70 mix-blend-multiply blur-xl filter"></div>
      <div className="relative m-8 space-y-4">
        <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
          <div className="flex-1">
            <div className="h-4 w-48 rounded bg-gray-300"></div>
          </div>
          <div>
            <div className="h-6 w-24 rounded-lg bg-primary"></div>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
          <div className="flex-1">
            <div className="h-4 w-44 rounded bg-gray-300"></div>
          </div>
          <div>
            <div className="h-6 w-28 rounded-lg bg-secondary"></div>
          </div>
        </div>
        <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
          <div className="flex-1">
            <div className="h-4 w-56 rounded bg-gray-300"></div>
          </div>
          <div>
            <div className="h-6 w-20 rounded-lg bg-third"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
