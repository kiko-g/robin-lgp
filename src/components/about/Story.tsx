import * as React from 'react'
import SeeMore from '../SeeMore'
import { FEUPCampus } from '../../images'

type Props = {
  id: string
}

const Story = ({ id }: Props) => (
  <section id={id} className="relative overflow-hidden rounded shadow lg:flex lg:rounded-xl">
    <div className="w-full rounded-none bg-lighter p-4 text-center dark:bg-white/5 sm:p-8 lg:w-1/2 lg:rounded-l-xl lg:p-12 lg:text-left">
      <div className="mx-auto max-w-xl space-y-4 lg:ml-0">
        <p className="mt-2 text-2xl font-bold sm:text-3xl">Our Story.</p>
        <p className="text-sm font-normal lg:mt-4 lg:text-base">
          Our company and brand were founded following a project proposal to create an Assistant for Critical
          Manufacturing's MES. We believe Robin is a suitable name because of the symbolism it carries from Batman,
          which has Robin as a sidekick.
        </p>
      </div>
    </div>

    <div className="relative h-64 w-full rounded bg-lighter dark:bg-white/5 sm:h-96 lg:h-auto lg:w-1/2 lg:rounded-l-none lg:rounded-r-xl">
      <img
        src={FEUPCampus}
        alt="FEUP Campus"
        className="absolute inset-0 h-full w-full rounded object-cover p-3 lg:rounded-l-none lg:rounded-r-xl  lg:p-0"
      />
    </div>
  </section>
)

export default Story
