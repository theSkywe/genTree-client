import React from 'react'
import { connect } from 'react-redux'
import { addNode, loadTree } from "../actions/actions"
import "../styles/AddNodeForm.css"


export class AddNodeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: ""
  }

  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleImageChange = this.handleImageChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  this.handleCancel = this.handleCancel.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleImageChange(event) {
    this.setState({image: event.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.addNode(this.props.parentID, this.state.name, this.state.image)
    this.props.loadTree()
    this.handleCancel()
  }

  handleCancel() {
    this.props.addClick()
  }

//  handleImageUpload() {}


  render() {
      return (
        <form className="AddNodeForm" onSubmit={this.handleSubmit}>
          <div>
            <label style={{display: "block"}}>Name</label>
            <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </div>
          <div>
            <label style={{display: "block"}}>Photo</label>
            <input name="image" type="text" value={this.state.image} onChange={this.handleImageChange}/>
          </div>       
          <div className="submitGroup">
            <button type="cancel" onClick={this.handleCancel}> Cancel </button>
            <button type="submit">Submit</button> 
          </div>
        </form>
      );
    } 
}

export default connect(
  state => ({}),
  { addNode, loadTree }
)(AddNodeForm);