import React from 'react'
import About from '../About/About'
import Home from '../Home/Home'
import Skills from '../Skills/Skills'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'

const Footer = () => {
  return (
    <div>
       <Contact/>
    <div className='bg-dark-blue px-3 py-3'>
      <p className='text-center text-primary'>© 2026 Seema Verma | Frontend Developer</p>
        {/* <div>
            <h2>Seema Verma</h2>
            <p className='text-sm text-primary-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore eos at omnis! Quod non, blanditiis dolor nihil quos quam optio numquam perspiciatis harum quas, cupiditate necessitatibus veniam sint inventore odit.</p>
        </div>
        <div>
            <h2>Quick Links</h2>
            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Home</Link></li>
            <li><Link to="/skills">Home</Link></li>
            </ul>
            
        </div> */}
    </div>
    </div>
  )
}

export default Footer