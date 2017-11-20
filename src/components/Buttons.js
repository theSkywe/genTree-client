import React from 'react'
import "../styles/Buttons.css"
import AddNodeForm from "../components/AddNodeForm"
import { connect } from 'react-redux'
import { deleteNode, loadTree } from "../actions/actions"


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
          <button type="button" className="AddButton" onClick={this.onAddClick}> Add </button>
        </div>       
        {this.state.showForm && <AddNodeForm parentID={this.props.parentID}/>}
      </div>

    )
  }
}

export class DeleteButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nodeID: this.props.nodeID
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  handleDeleteClick() {
    this.props.deleteNode(this.props.nodeID)
    this.props.loadTree()
   }

  render() {
    return (
      <div className="Buttons">
        <button type="button" className="DeleteButton" onClick={this.handleDeleteClick}>Del</button>
      </div>
    )
  }
}


export default connect(
  state => ({}),
  { deleteNode, loadTree }
)(DeleteButton);