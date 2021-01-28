import React from 'react'
import '../assets/scss/TestPage.scss'

import { transitionHiddenElement } from '@cloudfour/transition-hidden-element'

const menuTransitioner = transitionHiddenElement({
  element: document.querySelector('nav'),
  visibleClass: 'showed',
})

const TestPage = () => {
  const trig = () => {
    menuTransitioner.show()
  }
  return (
    <>
      <nav>
        <ul>
          <li>Start</li>
          <li>End</li>
        </ul>
        <div className="btn" id="bt">
          Button
        </div>
      </nav>
      <div className="middle-btn" onClick={trig}>
        CLICK ME!
      </div>
    </>
  )
}

export default TestPage
