import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Ads from '@/components/Ads'
import Home from '@/containers/Home'
import JobDetail from '@/containers/JobDetail'

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Ads(Home)} />
                <Route path="/:id" component={Ads(JobDetail)} />
            </Switch>
        )
    }
}
export default withRouter(connect()(Routes))