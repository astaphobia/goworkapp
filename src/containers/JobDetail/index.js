import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import isEmpty from 'lodash/isEmpty'
import isArray from 'lodash/isArray'
import isObject from 'lodash/isObject'

import * as actions from './actions'
import Loader from '@/components/Loader'
import Card from '@/components/Card'
import { unslug } from '@/utils/slug'

class JobDetail extends React.Component {
    static propTypes = {
        job: PropTypes.object
    }
    componentWillMount() {
        this.props.actions.fetchJobDetail(this.props.match.params.id)
    }
    render() {
        const { job } = this.props
        const removeItems = ['company', 'location', 'nationality', 'title', 'type', 'views']
        if (isEmpty(job)) {
            return <Loader />
        }
        return (
            <React.Fragment>
                <Card
                    item={job}
                    showBackground
                    renderBody={item => (
                        <React.Fragment>
                            <div className="card-header">
                                <h5 className="card-title">
                                    {item.title} <span className="small">{item.views} views</span>
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {item.company}
                                </h6>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <i className="fa fa-map-marker" /> {item.location} {' '}
                                <i className="fa fa-briefcase" /> {item.type}
                            </h6>
                        </React.Fragment>
                    )}
                    renderFooter={() => (
                        <div className="row">
                            <div className="col-4">
                                <button className="btn btn-white">
                                    <i className="fa fa-share-alt" /> Kongsi
                            </button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-white">
                                    <i className="fa fa-heart" /> Simpan
                            </button>
                            </div>
                            <div className="col-4">
                                <button className="btn btn-white">
                                    <i className="fa fa-pencil-square-o" /> Mohon
                            </button>
                            </div>
                        </div>
                    )}
                />
                {Object.keys(job).filter(key => !removeItems.includes(key)).map((key, index) => {
                    const item = { name: unslug(key), value: job[key] }
                    return (
                        <Card
                            key={index}
                            item={item}
                            renderBody={item => (
                                <React.Fragment>
                                    <div className="card-header">
                                        <h5 className="card-title">
                                            {item.name}
                                        </h5>
                                    </div>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {(!Array.isArray(item.value) && typeof item.value != 'string')
                                            && Object.keys(item.value).reduce((str, key) => {
                                                if (Array.isArray(item.value[key])) {
                                                    return str += ` ${unslug(key)}: ${item.value[key].join(', ')}`
                                                }
                                                return str += `${unslug(key)}: ${item.value[key]}, `
                                            }, '')
                                            || null}
                                        {typeof item.value === 'string'
                                            && item.value
                                            || null}
                                        {Array.isArray(item.value)
                                            && item.value.reduce((str, key) => str += `${key}, `, '')
                                            || null}
                                    </h6>
                                </React.Fragment>
                            )}
                        />
                    )
                })}
            </React.Fragment>

        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
function mapStateToProps(state) {
    return { job: state.job.jobDetail }
}
export default connect(mapStateToProps, mapDispatchToProps)(JobDetail)

