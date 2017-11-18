import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionTitle extends Component {
  render() {
    return (
      <div className="mb4">
        <label htmlFor="title" className="f6 b db mb2">Question</label>
        <input
          type="text"
          id="title"
          value={this.props.titles[this.props.questionId]['title']}
          onChange={(e) => {
            this.props.changeTitle(this.props.questionId, e.target.value)
          }}
          className="border-box hover-black w-90 ba b--black-20 pa2 br2 mb2"/>
      </div>
    )
  }

  state = {
    title: this.props.titles[this.props.questionId]['title']
  }
}

const changeTitle = (questionId, newTitle) => ({
  type: 'CHANGE_TITLE',
  questionId,
  newTitle
})

export default connect(
  ({ titles }) => ({ titles }),
  { changeTitle }
)(QuestionTitle)
