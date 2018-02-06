import React, { Component } from 'react'
import electron from 'electron';

import './About.css'
export class About extends Component {

  render() {

    return (
      <div className="about">
        <p>Created by <a href="#" onClick={( e ) => electron.shell.openExternal( "https://github.com/Ciaran0" )}>Ciaran O'Connor</a></p>
        <p>Code can be found on <a href="#" onClick={( e ) => electron.shell.openExternal( "https://github.com/Ciaran0/crypto-price-checker" )}>Github</a></p>
        <p>Data provided by <a href="#" onClick={( e ) => electron.shell.openExternal( "https://coinmarketcap.com/" )}>coinmarketcap.com</a></p>
      </div>
    );
  }
}