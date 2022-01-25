import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: []
}

// Create context
export const GlobalContext = createContext(initialState);


// Provider Component --> provides state/actions to the components it is wrapped around
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions - calls to reduce
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id
    })
  }

  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction
    })
  }

  return (
    <GlobalContext.Provider value={{ transactions:state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </GlobalContext.Provider>
  )
}
