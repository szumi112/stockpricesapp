import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className='nav'>

            <NavLink to="/" 
            style={({isActive}) => {
                return {color: isActive? 'white':''}
            }}>
                    Crypto
            </NavLink>

            <NavLink to="/stocks"
            style={({isActive}) => {
                return {color: isActive? 'white':''}
            }}
            >
                    Stocks
            </NavLink>



    </div>
  )
}

export default Navbar