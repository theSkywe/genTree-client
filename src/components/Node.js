import React from 'react'
import { connect } from "react-redux"
import { AddButton, DeleteButton } from "./Buttons"
import "../styles/Node.css"


function mapStateToProps(state) {
  return {
      data: state
  }
}

export class NodeContainer extends React.Component {
 
  render() {
    var imagePath = "../images/"
    if (this.props.data) {
      
      var nodeTemplate = this.props.data.map(function(item) {
        return (             
          <div className="NodeContainer" key={item.id}>
            {item.id > 1 && <DeleteButton nodeID={item.id}/>}      
            <div className="Node" >      
             {/* 
             critical dependency
             <img className="NodeImage" src={require(item.image)} alt="no_image"/> 
             */}
              <img className="NodeImage" src={imagePath + item.image} alt="error"/> 
              <div className="NodeName">{item.name}</div>
            </div>
            <AddButton parentID={item.id}/>
          </div>
        )
    })
    }

    return (
      <div data={this.props.data}>
        {nodeTemplate}
      </div>
    )
  }
}
export default connect(mapStateToProps)(NodeContainer)