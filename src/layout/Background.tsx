import * as React from 'react'
import '../styles/animation.css'

type Props = {
  globs?: boolean
}

export const Background = ({ globs }: Props) => {
  return (
    <div className="background-wrapper gradient flow">
      {globs && (
        <div className="background-area">
          <ul className="background-circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      )}
    </div>
  )
}
