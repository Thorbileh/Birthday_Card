import React from 'react'
import './card.css';
import img from './download.jpg'
function Card() {
  return (
    <div className="card">
      <div className="outside">
        <div className="front">
          <p>Happy Birthday</p>
          <img src={img}></img>

        </div>
        <div className="back"></div>
      </div>
      <div className="inside">
        <div className="upper">

          <h1 className='h1'>You are a wonderful person </h1>
          <h1 className='h2'>I hope your special day is the</h1>
          <h1 className='h3'>beginning of another amazing year</h1>
          <h1 className='h4'>Have a blissful day </h1>
        </div>

        <marquee className='lower1' behavior="slide" direction="left">Happy Birthday...</marquee>

        <div className='lower'>

          <h1 className='lower2'>Wishing you  </h1>
          <h1 className='lower3'>success,Joy and</h1>
          <h1 className='lower4'>Happiness always.... </h1>
        </div>
      </div>
    </div>

  )
}

export default Card