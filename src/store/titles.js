const initialState = {
  'S1NuyLpJz': {
    title: 'Which country you like the most?'
  },
  '1fqplsk12': {
    title: 'What your is favorite tool?'
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'NEW_TITLE':
      return { ...state, [action.questionId]: { title: 'enter your new question here' } }

    case 'CHANGE_TITLE':
      return { ...state, [action.questionId]: { title: action.newTitle } }

    default: return state
  }
}
