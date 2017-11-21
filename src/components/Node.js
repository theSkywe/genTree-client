import React from 'react'
import { connect } from "react-redux"
import { AddButton} from "./Buttons"
import DeleteButton from "./Buttons"
import "../styles/Node.css"
import "../styles/Tree.css"


function mapStateToProps(state) {
  return {
      data: state
  }
}

export class NodeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.setState = {
      id: this.props.id
    }
  }

  nodeRender(item) {
    const serverUploadFolder = "http://localhost:8080/"
    const imagePath = serverUploadFolder + item.image
    return (             
      <div className="NodeContainer">
        <DeleteButton nodeID={item.id}/>  
        <div className="Node" >                 
          <img className="NodeImage" src={(imagePath)} alt="no_image"/> 
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
            { 
            <ul>
              {
              this.props.data.filter( (obj) => {
                if (obj.lft > p.lft && obj.rgt < p.rgt && (obj.depth === (p.depth + 1))) {
                  return true
                } else { return false }
              }).map( c => {
                return ( this.treeBuilder(c) )
              })
              }
            </ul>
          }
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