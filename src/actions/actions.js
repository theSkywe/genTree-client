import axios from "axios"

const apiUrl = "http://localhost:8080/nodes" 

export const loadTree = () => (dispatch) => {
    axios.get(apiUrl)
        .then((response) => {
            dispatch(updateTree(response.data))
        })
        .catch(error => {
            alert("error")
            console.log(error.response)
        })
}

export const deleteNode = (nodeID) => (dispatch) => {
    axios.delete(apiUrl + "/" + nodeID)
        .then((response) => {         
            dispatch(updateTree(response.data))
        })
        .catch(error => {
            alert("error")           
            console.log(error)
        })
}

export const addNode = (data) => (dispatch) => {
    axios.post(apiUrl, data,
    {
        headers: {
            "Content-type": "multipart/form-data"
        }
    })
        .then((response) => {       
            dispatch(updateTree(response.data))
        })
        .catch(error => {    
            alert("error")    
            console.log(error)
        })
}

export function updateTree(data){
    return {
        type: "UPDATE_TREE",
        response: data
    }
}