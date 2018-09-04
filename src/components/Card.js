import React from 'react'
import PropTypes from 'prop-types'

import Background from '@/../images/bg-red.jpg'

class Card extends React.Component {
    static propTypes = {
        showBackground: PropTypes.bool,
        renderBody: PropTypes.func.isRequired,
        renderFooter: PropTypes.func
    }

    render() {
        const { showBackground, item, renderBody, renderFooter } = this.props
        return (
            <div className="card job-detail" style={{ margin: '0 0 20px 0' }}>
                {!!showBackground
                    && <img className="card-img-top" src={Background} height="160px" alt="background detail"/>
            || null}
                <div className="card-body">
                    {renderBody(item)}
                </div>
                {!!renderFooter
                    && (
                        <div className="card-footer text-muted">
                            {renderFooter(item)}
                        </div>
                    ) || null}
            </div>
        )
    }
}
export default Card