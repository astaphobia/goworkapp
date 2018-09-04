import React from 'react'
import PropTypes from 'prop-types'

class Card extends React.Component {
    static propTypes = {
        item: PropTypes.object
    }
    render() {
        return (
            <div className="card" >
                <div className="card-body">
                {this.item ? (
                    'item'
                ) : 'Empty'}
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