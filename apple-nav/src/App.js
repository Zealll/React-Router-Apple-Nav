import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper'
import SubNav from './components/SubNav'
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
        <NavWrapper names={this.state.names}/>
        <SubNav 
        mac={this.state.mac} 
        ipad={this.state.ipad} 
        iphone={this.state.iphone}
        watch={this.state.watch}
        tv={this.state.tv}
        music={this.state.music}
        />
          
        </header>
      </div>
    );
  }
}

export default App;
