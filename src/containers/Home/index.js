import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from './actions'
import CardWrapper from '@/components/CardWrapper'

class Home extends React.Component {
    static propTypes = {
        actions: PropTypes.object,
        jobs: PropTypes.array
    }
    componentWillMount() {
        this.props.actions.fetchJobs()
    }
    render() {
        const { jobs } = this.props
        return (
            <div className="container">
                <CardWrapper>
                        {jobs.map((job, index) => <CardWrapper.Card key={index} item={job} />)}
                </CardWrapper>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { ...state.job }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)