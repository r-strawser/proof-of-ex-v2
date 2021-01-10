import constants from 'core/types'


const initialState = {
    stagedAsset: null,
    assetHash: '',
    alreadyExists: false,
    error: '',
    transaction: null,
    success: false
  }

export function assetReducer(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_ASSET:
            return Object.assign({}, state, {
            stagedAsset: action.asset[0]
    })
        default:
            return state
    }
}