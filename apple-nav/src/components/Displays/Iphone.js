import React from 'react'
import {Link} from 'react-router-dom'

function Iphone(props) {
    return (
        <div className='allItems'>
            {props.content.map(eachContent => (
            <div  className='individualIcon'>
               <Link exact to={`/iphone/${eachContent.name}`}>
               <img src={eachContent.icon} alt='sdfsf' />
                <p>{eachContent.name}</p>
               </Link>
                
            </div>

            ))}
        </div>
    )
}

export default Iphone