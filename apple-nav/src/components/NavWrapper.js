import React from 'react'
import { NavLink } from 'react-router-dom'

function NavWrapper(props) {
    return (
        <div className='wrapper'>
            <nav className='navs'>
                <NavLink to='/mac' style={{ textDecoration: 'none' }} ><p>Mac</p></NavLink>
                <NavLink to='/ipad' style={{ textDecoration: 'none' }} ><p>iPad</p></NavLink>
                <NavLink to='/iphone' style={{ textDecoration: 'none' }} ><p>iPhone</p></NavLink>
                <NavLink to='/watch' style={{ textDecoration: 'none' }} ><p>Watch</p></NavLink>
                <NavLink to='/tv' style={{ textDecoration: 'none' }} ><p>TV</p></NavLink>
                <NavLink to='/music' style={{ textDecoration: 'none' }} ><p>Music</p></NavLink>
                <NavLink to='/support' style={{ textDecoration: 'none' }} ><p>Support</p></NavLink>
            </nav>
        </div>
        
    )
}

export default NavWrapper