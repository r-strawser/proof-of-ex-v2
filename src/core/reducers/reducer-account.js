import constants from 'core/types'

const initialState = {
  id: ''
}

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_ACCOUNT:
      return Object.assign({}, state, {
        id: action.id
      })

      default:
          return state
  }
}