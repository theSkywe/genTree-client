import axios from "axios"

const apiUrl = "http://localhost:8080/nodes" 

export const loadTree = () => (dispatch) => {
    axios.get(apiUrl)
        .then((response) => {
            alert(response.data)
            dispatch(updateTree(response.data))
        })
        .catch(error => {
            alert(error.response)
            console.log(error.response)
        })
}

export const deleteNode = (nodeID) => (dispatch) => {
    axios.delete(apiUrl, {
            data: {
                id: nodeID
            }
        })
        .then((response) => {
            alert(response.data)           
            dispatch(updateTree(response.data))
        })
        .catch(error => {
            alert(error.response)           
            console.log(error)
        })
}

export const addNode = (parentID, nodeName, nodeImage) => (dispatch) => {
    axios.post(apiUrl, {
            data: {
                id: parentID,
                name: nodeName,
                image: nodeImage
            },
        })
        .then((response) => {
            alert("sad")
            alert(response.data)          
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