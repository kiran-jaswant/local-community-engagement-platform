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
                    <div className=' border-4 rounded-lg flex justify-center flex-row'>
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
