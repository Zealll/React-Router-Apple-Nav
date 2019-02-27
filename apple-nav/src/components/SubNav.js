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
    console.log(props.mac)
    return(
        <div className='subNav'>
            <Route exact path='/mac' 
            render={() => <Mac content={props.mac} />} />
            <Route exact path='/ipad' 
            render={() => <Ipad content={props.ipad} />} />
            <Route exact path='/iphone' 
            render={() => <Iphone content={props.iphone} />} />
            <Route exact path='/watch' 
            render={() => <Watch content={props.watch} />} />
            <Route exact path='/tv' 
            render={() => <Tv content={props.tv} />} />
            <Route exact path='/music' 
            render={() => <Music content={props.music} />} />
            <Route exact path='/support' 
            render={() => <Support content={props.support} />} />
        </div>
    )
}

export default SubNav

// render={props => <Mac {...props} mac={props.mac}/>}