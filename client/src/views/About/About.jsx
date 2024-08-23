import React from 'react'
import "./About.css"
function About() {
  return (
    <div>
      <h1 className='main-heading'>About Us</h1>
      <div>
        <h2>Who are we ?</h2>
        <p>Welcome to NeighbourNet, 
          the heart of community connection in Manish Nagar.
           We are a group of local residents dedicated to enhancing our neighborhood through meaningful engagement, mutual support,
            and collective action. Our goal is to strengthen the bonds between neighbors and foster a vibrant, thriving community.</p>
      </div>
      <div>
      <h2>Our Mission</h2>
        <p>Our mission is to unite the residents of Manish nagar to create a more connected, 
          engaged, and supportive neighborhood. We are committed to promoting local initiatives, 
        organizing events, and providing resources that enrich our community and make a better place to live.</p>
      </div>
      <div>
        <h2>Our Values</h2>
        <p>
          <ul>
            <li>Community Spirit: We believe in the power of neighbors coming together to support each other and improve our
               shared environment.</li>
            <li>Inclusivity: We are dedicated
              to creating a space where every resident feels welcomed and valued, regardless of background.</li>
            <li>Collaboration: We work hand-in-hand with residents and local organizations to achieve common goals and tackle challenges.
            </li>
          </ul>
        </p>
      </div>

    </div>
  )
}

export default About
