import React from 'react'
import "./card.css"
import data from "../database/fakedata.json"
export default function Card() {
  console.log(data)
  return (
    <div className='Card-Main'>

      {
        data.map((d) => {
          return (
            <div className='Card-Heading'>
              <div className='card-h1'>
                <p>
                  {d.round}
                </p>
              </div>
              <div className='ProgressBar-background'>
                <div className='ProgressBar'>
                </div>
              </div>
              <div className='card-h2'>
                <div className='card-box'>
                  <div>
                    <p>Prize Pool :</p>
                    <p>378 TShibx</p>
                  </div>
                  <button className='btn-up'>Enter Up</button>
                  <button className='btn-down'>Enter Down</button>
                </div> 
              </div>
            </div>
          )

        })
      }


    </div>
  )
}
