import React, { Component } from 'react';

import '../assets/App.css';
import TopBarDropDown from './TopBarDropdown.js';

class TopBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      settingsMenuOpen: false, 
    };
  }
  
  render() {
    return (
      <div className="TopBar">
        <img id="settings-toggle"
          onClick={this.toggleSettings.bind(this)}
          data-toggle="tooltip" 
          title="Settings" 
          height="26"
          alt="Settings Cog"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAHlBMVEVMaXGIi4+Ah4yCh4yDiI2BhoyBh4yBh4yAh4yAhouZAMq8AAAACXRSTlMAG8FYOd+D86AAMG8OAAABF0lEQVRYw+1X2RKDIAw0gXD8/w+3djwiFQ3DtuMD+yqsIceyTNPAwMADkPKG1EWUFaiDx2si30HkNJHrIAqaKGBy3Zdt1kTcuJlSWOvjoiaKa5IoJDJGwfMef4hnhsyFc2yLbimUhJBPkIJYSyjZBGkq+BVumoGilSiSvXGukcyzdQdvbcClDd37DOTOvrQEJNtvvTSEROViVhmlMii5SHex+Li0+A2TvY/8xclvRUUNKtdrEQ0qt/ekqwpmNMmuVNWezJP2wRZR/VKJ/yVCHc2Dko0qP6ghUSMCG1qYjMCEDSe1MPHHXUewCxJ3Ze8m4jRdwW4ilK35Co5bbA3OaMGs30/MKMwewww77AlBmugZz6yBgQEQXgplKz7I4pSzAAAAAElFTkSuQmCC"/>
        
        <TopBarDropDown open={this.state.settingsMenuOpen}/>

      </div>
      )
  }
  
  toggleSettings() {
   this.setState((state, props) => ({
      settingsMenuOpen: !this.state.settingsMenuOpen
    }));
  }
  
}

export default TopBar;
