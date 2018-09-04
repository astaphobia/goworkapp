import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import PropTypes from 'prop-types'

import * as actions from './actions'

class Home extends React.Component {
    static propTypes = {
        actions: PropTypes.object,
        jobs: PropTypes.array
    }
    componentWillMount(){
        this.props.actions.fetchJobs()
    }
    render(){
        return (
            <div className="container">
                <h1>Home Page</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.job
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)