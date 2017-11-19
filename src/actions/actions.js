import axios from "axios"

const apiUrl = "http://localhost:8080/nodes"

export function loadTree() {
    return (dispatch) => {
        return axios.get(apiUrl)
        .then((response) => {
            console.log("recieved response")
            dispatch(updateTree(response))
            console.log("dispatched")
        })
        .catch(error => {
            throw(error)
        })
    }
}

export function deleteNode(nodeID) {
    return (dispatch) => {
        return axios.delete(apiUrl, {
            body: {
                id: nodeID
            }
        })
        .then(loadTree())
    /*        .then((response) => {
            dispatch(updateTree(response))
        })
   */     .catch(error => {
            throw(error)
        })
    }
}

export function addNode(parentID, nodeName, nodeImage){
    console.log("addNode started")
    return (dispatch) => {
        return axios.post(apiUrl, { 
            body: {
                id: parentID, 
                name: nodeName,
                image: nodeImage
            }
        })
        .then(loadTree())
  /*      .then((response) => {
            dispatch(updateTree(response))
        })
  */      .catch(error => {
            throw(error)
        })
    }
}

export function updateTree(response){
    return {
        type: "UPDATE_TREE",
        response: response
    }
}