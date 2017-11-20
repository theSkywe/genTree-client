import React from 'react'
//import axios from "axios"
import { connect } from 'react-redux'
import { addNode } from "../actions/actions"
import "../styles/AddNodeForm.css"
import * as actions from "../actions/actions"


export class AddNodeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      name: "",
      image: ""
  }

  this.handleNameChange = this.handleNameChange.bind(this)
  this.handleImageChange = this.handleImageChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({name: event.target.value})
  }

  handleImageChange(event) {
    this.setState({image: event.target.value})
  }


  handleSubmit(e) {
    e.preventDefault();
    //actions.addNode(this.state.parentID, this.state.name, this.state.image)
    this.props.addNode(this.props.parentID, this.state.name, this.state.image)
    //actions.loadTree()
/*
 
axios.post('http://localhost:8080/nodes', {
  params: {
         id: this.props.parentID, 
         name: this.state.name,
         image: this.state.image
     }
 })
 .then(function (response) {
   alert("test")
   console.log(response.data);
 })
 .catch(function (error) {
   alert("error")
   console.log(error);
 });
/*
    axios.get("http://localhost:8080/nodes")
        .then((response) => {
            console.log("recieved response")
            store.dispatch(actions.updateTree(response))
            console.log("dispatched")
        })
        .catch(error => {
            throw(error)
        })
        */

    /*
    api.addNode("http://localhost:3307/nodes", this.props.id, this.props.name, this.props.image).then(response => {
      this.context.store.dispatch(actions.updateTree, response)
    })
    */
  }


  handleImageUpload() {
    
  }


  render() {
      return (
        <form className="AddNodeForm" onSubmit={this.handleSubmit}>
          <div>
            <label>Enter name:</label>
            <input name="name" type="text" value={this.state.name} onChange={this.handleNameChange}/>
          </div>
          <div>
            <label>Upload photo</label>
            <input name="image" type="text" value={this.state.image} onChange={this.handleImageChange}/>
          </div>       
          <button type="submit">Submit</button> 
        </form>
      );
    } 
}

export default connect(
  state => ({}),
  { addNode }
)(AddNodeForm);