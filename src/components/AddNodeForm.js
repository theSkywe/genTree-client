import React from 'react'
import { connect } from 'react-redux'
import { addNode, loadTree } from "../actions/actions"
import "../styles/AddNodeForm.css"


export class AddNodeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      image: null
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
    this.setState({image: event.target.files[0]})
  }

  handleCancel() {
    this.props.addClick()
  }

  handleSubmit(event) {
    event.preventDefault()
    const data = new FormData()

    data.append("id", this.props.parentID)
    data.append("name", this.state.name)
    data.append("image", this.state.image)
    this.props.addNode(data)
    this.props.loadTree()
    this.handleCancel()
  }

  render() {
    return (
      <form className="AddNodeForm" onSubmit={this.handleSubmit}>
        <div>
          <label style={{display: "block"}}>Name</label>
          <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
        </div>
        <div>
          <label style={{display: "block"}}>Photo</label>
          <input name="image" type="file"  onChange={this.handleImageChange}/>
        </div>       
        <div className="submitGroup">
          <button type="cancel" onClick={this.handleCancel}> Cancel </button>
          <button type="submit">Submit</button> 
        </div>
      </form>
    );
  } 
}

export default connect( state => ({}), { addNode, loadTree } )(AddNodeForm);