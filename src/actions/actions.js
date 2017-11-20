import axios from "axios"

const apiUrl = "http://localhost:8080/nodes"
axios.defaults.withCredentials = true

export function loadTree() {
    return (dispatch) => {
        return axios.get(apiUrl, { crossdomain: true })
        .then((response) => {
            alert(response.data)
            dispatch(updateTree(response.data))
        })
        .catch(error => {
            alert(error.response)
            console.log(error.response)
        })
    }
}

export function deleteNode(nodeID) {
    return (dispatch) => {
        return axios.delete(apiUrl, {
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
}

export function addNode(parentID, nodeName, nodeImage){
    return (dispatch) => {
        return axios.post(apiUrl, { 
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
}

export function updateTree(data){
    return {
        type: "UPDATE_TREE",
        response: data
    }
}