import React from 'react';
import "../styles/StartPoint.css"
import { AddButton } from "./Buttons"


export class StartPoint extends React.Component {
  render() {
    return (
      <div style={{display: "flex", height: "100px",width: "200px"}}>
        <div id="StartPoint" className="StartPoint">
          <img src={ require('../images/root.png')} height="50px" width="150px" alt="error"/>
        </div>
        <AddButton />
      </div>
    )
  }
}