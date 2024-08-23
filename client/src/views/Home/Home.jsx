import React from 'react'
import './Home.css'
import bgimg from './bg.jpg'
import Homecards from '../../components/Homecards/Homecards'




function Home() {
  return (
    <div className=''>
        <div className='mt-24'>
        <img src={bgimg} className='w-screen bg-img'></img>
        <div className='bg-white rounded-2xl shadow-black shadow-sm w-48 p-3 mybtn m-10'>
            <h6 className='text-gray-950 text-center'>Join the community</h6>
        </div>
        
        <h1 className='text-blue-950 oleo-script-regular heading m-10 font-extrabold'>NEIGHBOUR NET</h1>
        <p>

        </p>
        </div>
        <div>
            <Homecards></Homecards>

        </div>
        
    </div>
  )
}

export default Home

