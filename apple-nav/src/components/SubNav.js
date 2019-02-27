import React from 'react'
import {Route} from 'react-router-dom'
import Mac from './Displays/Mac'
import Ipad from './Displays/Ipad'
import Iphone from './Displays/Iphone'
import Watch from './Displays/Watch'
import Tv from './Displays/Tv'
import Music from './Displays/Music'
import Support from './Displays/Support'

function SubNav(props) {
    return(
        <div className='subNav'>
            <Route path='/mac' 
            render={() => <Mac content={props.mac} />} />
            <Route path='/ipad' 
            render={() => <Ipad content={props.ipad} />} />
            <Route path='/iphone' 
            render={() => <Iphone content={props.iphone} />} />
            <Route path='/watch' 
            render={() => <Watch content={props.watch} />} />
            <Route path='/tv' 
            render={() => <Tv content={props.tv} />} />
            <Route path='/music' 
            render={() => <Music content={props.music} />} />
            <Route path='/support' 
            render={() => <Support content={props.support} />} />
        </div>
    )
}

export default SubNav

// render={props => <Mac {...props} mac={props.mac}/>}