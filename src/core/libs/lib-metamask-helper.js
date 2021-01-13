export function requestAccountAccess(callback) {
  const { ethereum } = window

  ethereum.request({ method: 'eth_requestAccounts' }).then((account) => {
    if(callback) {
      callback(account[0])
    }
  })
}
