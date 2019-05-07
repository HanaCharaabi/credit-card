import React, { Component } from 'react';
import './App.css'
import puce from './images/puce.png'
import flech from './images/flech.png'
import masterCard from './images/MasterCard.png'
class App extends Component {
  state = {}
  render() { 
    return ( 
       <div className="App">
          <h1>CREDIT CARD</h1>
          <div className="main">
           <img className="puce" src={puce} alt="puce"/>
           <div className="info">
            <h2 id="numCart">7253  3256  7895  1245</h2>
            
            <div className="codeVal">
              <h3 id="code">5422</h3>
              
              <div className="DatVal">
               <h5>VALID <br/>THRU</h5>
               <img className="flech" src={flech} alt="flech"/>
               <span className="date">MONTH/YEAR <br/>
               <h3>11/50</h3>
               </span>
              
              </div>
            </div>
            <h4 id="cardType">CARTHOLDER</h4>
           </div>
         <div>
        <img className="MasterCard" src={masterCard} alt="masterCard"/>
       </div>
      </div>
      </div>
     );
  }
}
 
export default App;