import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import * as actions from './actions'
import CardWrapper from '@/components/CardWrapper'
import Loader from '@/components/Loader'

class Home extends React.Component {
    static propTypes = {
        actions: PropTypes.object,
        jobs: PropTypes.array
    }
    state = {
        jobId: false
    }
    handleClickItem = (id) => {
        this.setState({jobId: id})
    }
    componentWillMount() {
        this.props.actions.fetchJobs()
    }
    render() {
        const { jobs } = this.props
        if(this.state.jobId){
            return <Redirect to={`/${this.state.jobId}`}/>
        }
        return (
            <div className="container">
                {jobs.length >= 1 && (
                    <CardWrapper>
                        {jobs.map((job, index) => (
                            <CardWrapper.Card key={index} item={job} onClick={() => this.handleClickItem(job.id)}/>
                        ))}
                    </CardWrapper>
                ) || <Loader />}
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