import { generate as makeId } from 'shortid'

const initialState = {
  'S1NuyLpJz': [
    { id: makeId(), text: 'Canada' },
    { id: makeId(), text: 'EUA' },
    { id: makeId(), text: 'Germany' },
    { id: makeId(), text: 'Japan' },
    { id: makeId(), text: 'Brazil' },
    { id: makeId(), text: 'Denmark' }
  ],
  '1fqplsk12': [
    { id: makeId(), text: 'react' },
    { id: makeId(), text: 'redux' },
    { id: makeId(), text: 'node' },
    { id: makeId(), text: 'golang' },
    { id: makeId(), text: 'graphql' },
    { id: makeId(), text: 'relay' },
    { id: makeId(), text: 'postgres' },
    { id: makeId(), text: 'redis' },
    { id: makeId(), text: 'rethinkdb' }
  ]
}

const editChoice = (questionId, choiceId, newText) => {
  const choiceIndex = questionId.findIndex(choices => choices.id === choiceId)
  questionId[choiceIndex]['text'] = newText

  return questionId
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CHOICE':
      return { ...state, [action.questionId]: state[action.questionId].concat({
        id: makeId(),
        text: action.text
      }) }

    case 'NEW_QUESTION':
      return { ...state, [action.questionId]: [] }

    case 'EDIT_CHOICE':
      return {
        ...state,
        [action.questionId]: editChoice(state[action.questionId],
        action.choiceId,
        action.newText)
    }

    case 'REMOVE_CHOICE':
      return {
        ...state,
        [action.questionId]: state[action.questionId].filter((choice) => {
          return choice.id !== action.choiceId
        }) 
      }

    case 'CHANGE_POSITIONS':
      return { ...state, [action.questionId]: action.newPositions }

    default: return state
  }
}