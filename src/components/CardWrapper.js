import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
    static propTypes = {
        item: PropTypes.object,
        onClick: PropTypes.func
    }
    render() {
        const { item, onClick } = this.props
        return (
            <div className="card job-card" style={{ margin: '0 0 20px 0', cursor: 'pointer' }} onClick={onClick}>
                <div className="card-body">
                    {item && (
                        <React.Fragment>
                            <div className="card-header">
                                <h5 className="card-title">
                                    {item.title}
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">
                                    {item.company}
                                </h6>
                            </div>
                            <h6 className="card-subtitle mb-2 text-muted">
                                <i className="fa fa-map-marker" /> {item.location} {' '}
                                <i className="fa fa-briefcase" /> {item.type}
                            </h6>
                            <p className="card-text">
                                {Object.keys(item.requirements).reduce((str, key) => str += ` ${key}: ${item.requirements[key].join(', ')}`, '')}
                            </p>
                        </React.Fragment>
                    ) || 'Uppss zonk'}
                </div>
                <div className="card-footer text-muted">
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
                </div>
            </div>
        )
    }
}
class CardWrapper extends React.Component {
    static propTypes = {
        children: PropTypes.array
    }
    static Card = Card
    render() {
        return (
            <div className="list">
                {this.props.children.length >= 1 && (
                    <React.Fragment>
                        {this.props.children}
                    </React.Fragment>
                ) || (
                        <Card />
                    )}
            </div>
        )
    }
}

export default CardWrapper