import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import Card from './Card'

class Cards extends Component {
	moveCard = (dragIndex, hoverIndex) => {
		const cards = this.props.questions[this.props.questionId]
    const dragCard = cards[dragIndex]

    
    cards.splice(dragIndex, 1)
    cards.splice(hoverIndex, 0, dragCard)
    
    this.props.newPositions(this.props.questionId, cards)
	}

	render() {
		return (
			<div>
				{this.props.questions[this.props.questionId].map((card, i) => (
					<Card
						key={card.id}
						index={i}
						id={card.id}
						text={card.text}
            moveCard={this.moveCard}
            handleRemove={(choiceId) => this.props.removeChoice(this.props.questionId, choiceId)}
            handleEdit={(choiceId) => this.props.editChoice(choiceId, card.text)}
					/>
				))}
			</div>
		)
  }
}

const newPositions = (questionId, newPositions) => ({
  type: 'CHANGE_POSITIONS',
  questionId,
  newPositions
})

const removeChoice = (questionId, choiceId) => ({
  type: 'REMOVE_CHOICE',
  questionId,
  choiceId
})

export default connect(
  ({ questions }) => ({ questions }),
  { newPositions, removeChoice }
)(DragDropContext(HTML5Backend)(Cards))
