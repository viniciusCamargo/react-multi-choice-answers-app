import React, { Component } from 'react'
import { connect } from 'react-redux'
import { generate as makeId } from 'shortid'
import Question from './components/Question'

const Questions = (props) => {
  let n = 1
  return Object.keys(props.questions).map(key => (
    <div key={key} className='mt3'>
      <h2 className='dib'>Q{n++}: {props.titles[key]['title']}</h2>

      {!(props.selectedQuestion === key) && (
        <a className="f6 link dim br1 ph3 pv2 mh1 dib white bg-dark-green" onClick={(e) => {
          e.preventDefault()

          props.selectQuestion(key)          
        }} href='edit'>edit</a>
      )}

      <div>
        { props.questions[key].map(q => (
          <p key={q.id} className='dib br1 ph3 pv2 mt0 mh1 bg-light-purple'>{q.text}</p>
        )) }
      </div>
    </div>
  )
)}

class App extends Component {
  render() {
    return (
      <main className="flex flex-wrap pa4-ns">
        <section className="w-100 w-50-ns pa3">
          <a className="f6 link dim br1 ph3 pv2 mh1 dib white bg-dark-green" onClick={(e) => {
            e.preventDefault()

            const newQuestionId = makeId()

            this.props.createNewTitle(newQuestionId)
            this.props.newQuestion(newQuestionId)

            this.setState({ selectedQuestion: newQuestionId })
          }} href='new'>new question</a>

          <Questions
            selectedQuestion={this.state.selectedQuestion}
            selectQuestion={(selectedQuestion) => this.setState({ selectedQuestion })}
            questions={this.props.questions}
            titles={this.props.titles} />
        </section>

        {this.state.selectedQuestion && (
          <Question questionId={this.state.selectedQuestion} />
        )}
      </main>
    )
  }

  state = {
    selectedQuestion: ''
  }
}

const createNewTitle = (questionId) => ({
  type: 'NEW_TITLE',
  questionId
})

const newQuestion = (questionId) => ({
  type: 'NEW_QUESTION',
  questionId
})

export default connect(
  ({ questions, titles }) => ({ questions, titles }),
  { newQuestion, createNewTitle }
)(App)
