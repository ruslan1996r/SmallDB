import React, { useReducer, createContext } from 'react'

import Reducer, { TYPES } from "./reducer"

export const SmallContext = createContext()

export const SmallState = (props) => {
  const initialState = {
    showModal: false
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  const changeModalShow = (show) => dispatch({
    type: TYPES.changeModalShow,
    payload: show
  })

  return (
    <SmallContext.Provider
      value={{
        showModal: state.showModal,
        changeModalShow
      }}
    >
      {props.children}
    </SmallContext.Provider>
  )
}