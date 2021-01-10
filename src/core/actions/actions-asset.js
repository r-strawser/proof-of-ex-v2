import constants from 'core/types'


export function addAsset(asset) {
    return {
        type: constants.ADD_ASSET,
        asset
    }
}
