import * as React from 'react'
import { MESWithRobin, MESWithoutRobin } from '../../videos'
import '../../styles/showcase.css'

type Props = {
  id: string
}

const ShowcaseMES = ({ id }: Props) => (
  <section id={id} className="showcase">
    <h2>Our first product.</h2>
    <h4>
      A virtual assistant for <strong>MES</strong>, a{' '}
      <a
        className="text-[#00558c] transition hover:underline hover:opacity-80"
        href="https://www.criticalmanufacturing.com/"
        target="_blank"
      >
        Critical Manufacturing
      </a>{' '}
      product.
    </h4>
    <div className="showcase-grid">
      <div className="showcase-grid-inner">
        <header>
          <h3>
            MES <strong>Without</strong> Robin
          </h3>
          <span className="con" />
        </header>
        <video controls>
          <source src={MESWithoutRobin} type="video/mp4" />
        </video>
        <ul>
          <li className="con">Simple operations require a lot of repetitive operations.</li>
          <li className="con">Mental overhead to find and navigate in naturally complex interface.</li>
          <li className="con">
            A total of <strong>8 clicks</strong> and pages loaded to achieve something recurrent.
          </li>
        </ul>
      </div>
      <div className="showcase-grid-inner">
        <header>
          <h3>
            MES <strong>With</strong> Robin
          </h3>
          <span className="pro" />
        </header>
        <video controls>
          <source src={MESWithRobin} type="video/mp4" />
        </video>
        <ul>
          <li className="pro">Simple, friendly and intuitive interface.</li>
          <li className="pro">Shortcut for recurrent actions and operations.</li>
          <li className="pro">
            Only <strong>2 total (simple) clicks</strong> to complete a very common task.
          </li>
        </ul>
      </div>
    </div>
  </section>
)

export default ShowcaseMES
