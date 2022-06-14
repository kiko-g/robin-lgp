import * as React from 'react'
import { FEUPOverview } from '../../images'

type Props = {
  id: string
}

const Values = ({ id }: Props) => (
  <section id={id} className="relative overflow-hidden rounded shadow lg:flex lg:rounded-xl">
    <div className="w-full rounded-none bg-lighter p-4 text-center dark:bg-white/5 sm:p-8 lg:w-1/2 lg:rounded-l-xl lg:p-12 lg:text-left">
      <div className="mx-auto max-w-xl space-y-4 lg:ml-0">
        <p className="mt-2 text-2xl font-bold sm:text-3xl">Our Values.</p>
        <p className="text-sm font-normal lg:mt-4 lg:text-base">
          We are curious and eager looking to innovate and improve our ideas. We deeply care abouts Robin's success. We
          are are tenacious and optimistic.
        </p>
      </div>
    </div>

    <div className="relative h-64 w-full rounded bg-lighter dark:bg-white/5 sm:h-96 lg:h-auto lg:w-1/2 lg:rounded-l-none lg:rounded-r-xl">
      <img
        src={FEUPOverview}
        alt="FEUP Campus"
        className="absolute inset-0 h-full w-full rounded object-cover p-3 lg:rounded-l-none lg:rounded-r-xl  lg:p-0"
      />
    </div>
  </section>
)

export default Values
