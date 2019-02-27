import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import NavWrapper from './components/NavWrapper'
import SubNav from './components/SubNav'
import NewMac from './components/Displays/IndividualProducts/NewMac'
import NewIpad from './components/Displays/IndividualProducts/NewIpad'
import NewIphone from './components/Displays/IndividualProducts/NewIphone'
import NewMusic from './components/Displays/IndividualProducts/NewMusic'
import NewTv from './components/Displays/IndividualProducts/NewTv'
import NewWatch from './components/Displays/IndividualProducts/NewWatch'
import { macData, ipadData, iphoneData, watchData, tvData, musicData} from './AppleIconsData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      mac: [],
      ipad: [],
      iphone: [],  
      watch: [],
      tv: [],
      music: [],
    }
  }

  componentDidMount() {
    this.setState ({mac: macData})
    this.setState ({ipad: ipadData})
    this.setState ({iphone: iphoneData})
    this.setState ({watch: watchData})
    this.setState ({tv: tvData})
    this.setState ({music: musicData})
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavWrapper exact path='/' names={this.state.names}/>
        </header>
          <SubNav 
            mac={this.state.mac} 
            ipad={this.state.ipad} 
            iphone={this.state.iphone}
            watch={this.state.watch}
            tv={this.state.tv}
            music={this.state.music}
          />
          <Route exact path='/mac/:apple' render={props => <NewMac {...props} mac={this.state.mac}/>}/>
          <Route exact path='/ipad/:apple' render={props => <NewIpad {...props} ipad={this.state.ipad}/>}/>
          <Route exact path='/iphone/:apple' render={props => <NewIphone {...props} iphone={this.state.iphone}/>}/>
          <Route exact path='/watch/:apple' render={props => <NewWatch {...props} watch={this.state.watch}/>}/>
          <Route exact path='/tv/:apple' render={props => <NewTv {...props} tv={this.state.tv}/>}/>
          <Route exact path='/music/:apple' render={props => <NewMusic {...props} music={this.state.music}/>}/>
      </div>
    );
  }
}

export default App;
