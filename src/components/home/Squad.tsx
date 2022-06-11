import * as React from 'react'
import { TeamBImage } from '../../images/team'

const Squad = () => {
  return (
    <div className="gradient rounded-3xl overflow-hidden text-white lg:grid lg:grid-cols-2 lg:items-center">
      <div className="p-12 text-center sm:p-16 lg:p-24 lg:text-left">
        <div className="mx-auto max-w-lg lg:ml-0 lg:pt-12">
          <p className="text-3xl font-bold sm:text-4xl">A team built for success.</p>

          <p className="mt-4">
            We are a team of software engineers, designers, and product managers who are passionate about building the
            solutions of tomorrow.
          </p>
        </div>
      </div>

      <div className="lg:pt-24">
        <div className="relative h-64 w-full sm:h-96 lg:h-[500px]">
          <img className="absolute inset-0 h-full w-full object-cover lg:rounded-tl-3xl" src={TeamBImage} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Squad
