import React from 'react'

function NavWrapper(props) {
    return (
        <div className='wrapper'>
            <div className='navs'>{props.names.map(eachName => (
        <div className='name'>{eachName}</div>))}</div>
        </div>
        
    )
}

export default NavWrapper