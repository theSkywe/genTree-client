import React from 'react'
//import axios from "axios"
import "../styles/AddNodeForm.css"
//import * as actions from "../actions/actions"


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


  handleSubmit() {

    function json(response) {  
      return response.json()  
    }

    fetch("https://jsonplaceholder.typicode.com/posts/1", {
      method: "get",
      headers: {
        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
      },
      
    })
    .then(json)
    .then(function(data) {
      console.log('Request succeeded with JSON response', data);  
    })  
    .catch(function (error) {  
      console.log('Request failed', error);  
    });

   /* actions.addNode(this.state.parentID, this.state.name, this.state.image)
    actions.loadTree()

    
axios.post('https://google.com', {
  params: {
         id: this.props.parentID, 
         name: this.state.name,
         image: this.state.image
     }
 })
 .then(function (response) {
   console.log(response);
 })
 .catch(function (error) {
   console.log(error);
 });

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
