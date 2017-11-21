import React from 'react'
import { NodeContainer } from "../components/Node"
import { connect } from "react-redux"
import { loadTree } from "../actions/actions"
import "../styles/App.css"

export class App extends React.Component {

    componentDidMount() {
        this.props.loadTree()
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
  
export default connect(mapStateToProps, (state => ({}), {loadTree}))(App)