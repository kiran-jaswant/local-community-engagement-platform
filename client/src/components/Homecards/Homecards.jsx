import React from 'react'
import './Homecards.css'
import { events } from '../../config/Event/events'

function Homecards() {
    
  return (
    <div>
        {
            events.map((event,index)=>{
                const{name,icon}=event
                return(
                    <div className='w-72 border-4 rounded-lg'>
                        <img src={icon}></img>
                        <h3>{name}</h3>
                        

                    </div>

                )
            })
        }
      
    </div>
  )
}

export default Homecards
