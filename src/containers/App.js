import React from 'react'
import { NodeContainer } from "../components/Node"
import { connect } from "react-redux"
import * as actions from "../actions/actions"

export class App extends React.Component {
    
    
    componentDidMount() {
        actions.loadTree()
        /*
        api.getTree("http://localhost:3307/nodes").then(response => {
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