import axios from "axios"


export var getTree = function() {
    return axios.get("http://localhost:8080/nodes")
        .then(function (response) {
            return response.data
        }
    )
}


export var addNode = function() {
    return axios.post("http://localhost:8080/nodes", {
        params: {
            id: "",
            name: "",
            image: ""
        }
    })
        .then(function () { 
            return getTree()
        }
    )
}


export var deleteNode = function() {
    return axios.delete("http://localhost:3307/nodes", {
        params: {
            id: "id"
        }
    })
        .then(function () {
            return getTree()
        }
    )
}