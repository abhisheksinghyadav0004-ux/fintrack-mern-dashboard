const AppReducer = (state, action) => {
  switch(action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        loading: false,
        transactions: action.payload
      }
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        // Filter out the transaction based on _id from backend
        transactions: state.transactions.filter(transaction => (transaction._id || transaction.id) !== action.payload)
      }
    case 'ADD_TRANSACTION':
      return {
        ...state,
        // Naya transaction hamesha list ke upar dikhna chahiye
        transactions: [action.payload, ...state.transactions]
      }
    case 'TRANSACTION_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false // Error aane par loading rok do
      }
    default:
      return state;
  }
}

export default AppReducer;