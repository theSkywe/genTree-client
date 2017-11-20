import React from 'react'
import { connect } from "react-redux"
import { AddButton, DeleteButton } from "./Buttons"
import "../styles/Node.css"
import "../styles/Tree.css"


function mapStateToProps(state) {
  return {
      data: state
  }
}

export class NodeContainer extends React.Component {

  nodeRender(item) {
    var imagePath = "../images/"
    
    return (             
      <div className="NodeContainer">
        {item.id > 1 && <DeleteButton nodeID={item.id}/>}      
        <div className="Node" >                 
          <img className="NodeImage" src={ imagePath.concat(item.image)} alt="error"/> 
          <div className="NodeName">{item.name}</div>
        </div>
        <AddButton parentID={item.id}/>
      </div>
    )
  }

  treeBuilder(p) {
    if ((p.rgt-p.lft) > 1) {
      return ( 
          <li>
            {this.nodeRender(p)}
              { <ul>
                {
                this.props.data.filter( (obj) => {
                  if (obj.lft > p.lft && obj.rgt < p.rgt && (obj.depth === (p.depth + 1))) {
                    return true
                  }
                }).map( c => {
                  return (
                    this.treeBuilder(c)                  
                  )
                })}
              </ul>}
          </li>
      ) 
    } else {
      return (     
          <li>
            {this.nodeRender(p)}
          </li>  
      )
    }
  }

  render() {
    

    return (
          <div className="tree" data={this.props.data}>
          <ul>
            {this.treeBuilder(this.props.data[0])}
            </ul>
          </div>
    )
  }
}
export default connect(mapStateToProps)(NodeContainer)