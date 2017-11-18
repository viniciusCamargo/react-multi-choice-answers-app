import React, { Component } from 'react';
import Dragable from './Dragable'
import { connect } from 'react-redux'
import QuestionTitle from './QuestionTitle'
import InputChoice from './InputChoice'

const initialState = {
  inputValue: '',
  editingQuestionId: '',
  editingChoiceId: ''
}

class Question extends Component {
  _addChoice = () => {
    this.props.addChoice(this.props.questionId, this.state.inputValue)
    this.setState(initialState)
  }

  _editChoice = () => {
    this.props.editChoice(
      this.props.questionId,
      this.state.editingChoiceId,
      this.state.inputValue
    )
  }

  render() {
    return (
      <section className="w-100 w-50-ns pa3">
        <form>
          <QuestionTitle
            questionId={this.props.questionId} />
          <InputChoice
            value={this.state.inputValue}
            choiceId={this.state.editingChoiceId}
            handleChange={(text) => this.setState({ inputValue: text })}
            handleClick={() => {
              if (this.state.editingChoiceId) {
                this._editChoice()

                return this.setState(initialState)
              }
              
              this._addChoice()
            }} />
        </form>

        <div className="w-90">
          <label className="f6 b db mb2">Answer Choices</label>
          <Dragable questionId={this.props.questionId} editChoice={(choiceId, choiceText) => {
            this.setState({
              editingQuestionId: this.props.questionId,
              editingChoiceId: choiceId,
              inputValue: choiceText
            })
          }} />
        </div>
      </section>
    )
  }

  state = initialState
}

const addChoice = (questionId, text) => ({
  type: 'ADD_CHOICE',
  questionId,
  text
})

const editChoice = (questionId, choiceId, newText) => ({
  type: 'EDIT_CHOICE',
  questionId,
  choiceId,
  newText
})

const removeChoice = (questionId, choiceId) => ({
  type: 'REMOVE_CHOICE',
  questionId,
  choiceId
})

export default connect(
  ({ questions }) => ({ questions }),
  { addChoice, editChoice, removeChoice }
)(Question)
