import React from 'react'
import "../styles/Buttons.css"
import { AddNodeForm } from "../components/AddNodeForm"
import * as actions from "../actions/actions"


export class AddButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      parentID: this.props.parentID
    };
    this.onAddClick = this.onAddClick.bind(this)
  }

  onAddClick() {
    this.setState({showForm: !this.state.showForm})
  }

  render() {
    return (
      <div className="Buttons">
      <div>
        <button type="button" className="AddButton" onClick={this.onAddClick}> add </button>
      </div>
        {this.state.showForm && <AddNodeForm parentID={this.state.parentID}/>}
      </div>
    )
  }
}

export class DeleteButton extends React.Component {
  constructor(props) {
    super(props)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick() {
    actions.deleteNode(this.props.nodeID)
    actions.loadTree()
    /*
    api.deleteNode("http://localhost:3307/nodes", this.props.id).then(response => {
      this.context.store.dispatch(actions.updateTree, response)
    })
    */
}

  render() {
    return (
      <div className="Buttons">
        <button type="button" className="DeleteButton" onClick={this.handleDeleteClick}> del </button>
      </div>
    )
  }
}