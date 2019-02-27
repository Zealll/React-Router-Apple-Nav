import React from 'react'
import {Link} from 'react-router-dom'

function Tv(props) {
    return (
        <div className='allItems'>
            {props.content.map(eachContent => (
            <div  className='individualIcon'>
               <Link exact to={`/tv/${eachContent.name}`}>
               <img src={eachContent.icon} alt='sdfsf' />
                <p>{eachContent.name}</p>
                </Link>
                
            </div>

            ))}
        </div>
    )
}

export default Tv