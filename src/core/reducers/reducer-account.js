import constants from 'core/types'

const initialState = {
  id: null
}

export function accountReducer(state = initialState, action) {
  switch (action.type) {
    case constants.SET_ACCOUNT:
      return Object.assign({}, state, {
        id: action.id
      })
    
    case constants.SET_ACCOUNT_EMAIL:
      return Object.assign({}, state, {
        email: action.email
      })

      default:
          return state
  }
}