import React from 'react'
import "./card.css"
import data from "../database/fakedata.json"
export default function Card() {
  console.log(data)
  return (
    <div className='Card-Main'>
      
        {
          data.map((d)=>{
            return(
              <div className='Card-Heading'>
                <div className='card-h1'>
                  <p>
                {d.round}
                </p>
                </div>
                <div className='card-h2'>
                {d.data}
                </div>
                 </div>
            )

          })
        }

     
    </div>
  )
}
