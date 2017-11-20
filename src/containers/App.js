import React from 'react'
import { NodeContainer } from "../components/Node"
import { connect } from "react-redux"
import * as actions from "../actions/actions"
//import * as api from "../utils/api"

export class App extends React.Component {
    
    
    componentDidMount() {
        //this.props.loadTree()
        /*
        api.getTree("http://localhost:8080/nodes").then(response => {
            this.context.store.dispatch(actions.updateTree, response)
        })
        */
    }
    

    render() {
        const data = this.props.data
        return (
            <div>
                <NodeContainer data={data}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state
    }
}

  
export default connect(mapStateToProps)(App)