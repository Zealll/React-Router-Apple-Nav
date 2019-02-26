import React, { Component } from 'react';
import './App.css';
import NavWrapper from './components/NavWrapper'
import { navNames, macData, ipadData, iphoneData, watchData, tvData, musicData} from './AppleIconsData'

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      mac: [],
      ipad: [],
      iphone: [],  
      watch: [],
      tv: [],
      music: [],
    }
  }

  componentDidMount() {
    this.setState ({names: navNames})
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
          
          
        </header>
      </div>
    );
  }
}

export default App;
