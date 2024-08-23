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
                    <div className=''>

                    </div>

                )
            })
        }
      
    </div>
  )
}

export default Homecards
