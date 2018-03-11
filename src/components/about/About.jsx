import React, { Component } from 'react'
import electron from 'electron';

import './About.css'
export class About extends Component {

  render() {

    return (
      <div className="about">
        {/* <p>Created by <a href="#" onClick={( e ) => electron.shell.openExternal( "https://github.com/Ciaran0" )}>Ciaran O'Connor</a></p> */}
        {/* <p>Code can be found on <a href="#" onClick={( e ) => electron.shell.openExternal( "https://github.com/Ciaran0/crypto-price-checker" )}>Github</a></p> */}
        <div>
          <strong>Donations:</strong>
          <p>BTC: <a href="#" onClick={( e ) => electron.shell.openExternal( "bitcoin:3FMyrBTaZWk2JJu8Kp2eTsPvFy56uTfH2r" )}>3FMyrBTaZWk2JJu8Kp2eTsPvFy56uTfH2r</a></p>
          <p>LTC: <a href="#" onClick={( e ) => electron.shell.openExternal( "litecoin:MCdSRHdfHvDKGVKnHvF861sHEesucoJqiV" )}> MCdSRHdfHvDKGVKnHvF861sHEesucoJqiV</a></p>
        </div>
      </div>
    );
  }
}
