import React from 'react'
import './Home.css'
import bgimg from './bg.jpg'
import front from './front.jpg'
import Homecards from '../../components/Homecards/Homecards'
import { events } from '../../config/Event/events'




function Home() {
    return (
        <>
            <div className='flex  justify-between'>
                <div className='mt-24 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 '>
                    <img src={bgimg} className='w-full h-screen '></img>

                    <div className='bg-white rounded-2xl shadow-black shadow-sm w-48 p-3 mybtn m-10'>
                        <h6 className='text-gray-950 text-center'>Join the community</h6>
                    </div>

                    <h1 className='text-blue-950 oleo-script-regular heading m-10 font-extrabold'>NEIGHBOUR NET</h1>
                    <p className='text-blue-950 m-6 font-semibold text  '>Let's unite our strengths, collaborate on ideas, and make a lasting impact in our communities Let's join forces to shape the future of our community, fostering connection, innovation, and growth.

                    </p>

                </div>
            </div>
            <div>
                <img src={front} className='mt-20  h-96 rounded-full object-cover front w-96 shadow-md '>
                </img>
            </div>
           <div className='flex flex-wrap'>
            {
                events.map((event,index)=>{
                    const{name,icon}=event
                    return(
                        
                        <Homecards name={name} icon={icon} index={index}></Homecards>  
    
                    )
                })

                 
            }
           </div>
        </>


    )
}

export default Home

