import * as React from 'react'
import { FEUPCampus } from '../../images'

type Props = {
  id: string
}

const Purpose = ({ id }: Props) => (
  <section id={id} className="relative overflow-hidden rounded shadow lg:flex lg:rounded-xl">
    <div className="order-2 w-full rounded-none bg-lighter p-4 text-center dark:bg-white/5 sm:p-8 lg:order-2 lg:w-1/2 lg:rounded-r-xl lg:p-12 lg:text-left">
      <div className="mx-auto max-w-xl space-y-4 lg:ml-0">
        <p className="mt-2 text-2xl font-bold sm:text-3xl">Our Purpose.</p>
        <p className="text-sm font-normal lg:mt-4 lg:text-base">
          We aim to improve user experience and accessibility using digital platforms by offering a new concept of
          interface to decrease the communication involved in Human Computer Interaction. Our customers are the most
          important part for us so, we build a clear, honest and integral relationship with our customers. We are
          ambicious allways searching for more, looking for development and going further. We behave with determination
          to achieve sucess. We are full commited with what we have to do. We want to create our footprint, creating
          impact and value us and all of the community we are connected with. We believe in our potential and learning
          capabilities thus we invest on it.
        </p>
      </div>
    </div>

    <div className="relative order-1 h-64 w-full rounded bg-lighter dark:bg-white/5 sm:h-96 lg:order-1 lg:h-auto lg:w-1/2 lg:rounded-r-none lg:rounded-l-xl">
      <img
        src={FEUPCampus}
        alt="FEUP Campus"
        className="absolute inset-0 h-full w-full rounded object-cover p-3 lg:rounded-r-none lg:rounded-l-xl lg:p-0"
      />
    </div>
  </section>
)

export default Purpose
