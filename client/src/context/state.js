import React, { useReducer, createContext } from 'react'

import Reducer, { TYPES } from "./reducer"

export const SmallContext = createContext()

export const SmallState = (props) => {
  const initialState = {
    showModal: false,
    modalType: "create",
    item: null,
    data: [],
    isLoading: false,
    alertInfo: null
  }
  const [state, dispatch] = useReducer(Reducer, initialState)

  const changeModalShow = (show, modalType, item) => dispatch({
    type: TYPES.changeModalShow,
    payload: { show, modalType, item }
  })
  const setLoading = (loading) => dispatch({
    type: TYPES.setLoading,
    payload: loading
  })
  const setData = (data) => dispatch({
    type: TYPES.setData,
    payload: data
  })
  const createData = (item) => dispatch({
    type: TYPES.createData,
    payload: item
  })
  const deleteData = (id) => dispatch({
    type: TYPES.deleteData,
    payload: id
  })
  const updateData = (id, item) => dispatch({
    type: TYPES.updateData,
    payload: { id, item }
  })
  const setAlert = (data) => dispatch({
    type: TYPES.setAlert,
    payload: data
  })

  return (
    <SmallContext.Provider
      value={{
        showModal: state.showModal,
        modalType: state.modalType,
        data: state.data,
        item: state.item,
        isLoading: state.isLoading,
        alertInfo: state.alertInfo,
        changeModalShow,
        setLoading,
        setData,
        createData,
        deleteData,
        updateData,
        setAlert
      }}
    >
      {props.children}
    </SmallContext.Provider>
  )
}