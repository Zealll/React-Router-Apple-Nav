import React from 'react'

function Iphone(props) {
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

export default Iphone