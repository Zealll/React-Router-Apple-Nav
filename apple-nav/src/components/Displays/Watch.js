import React from 'react'

function Watch(props) {
    return (
        <div className='allItems'>
            {props.content.map(eachContent => (
            <div  className='individualIcon'>
               <div>
               <img src={eachContent.icon} alt='sdfsf' />
                <p>{eachContent.name}</p>
               </div>
                
            </div>

            ))}
        </div>
    )
}

export default Watch