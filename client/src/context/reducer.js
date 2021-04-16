export const TYPES = {
  changeModalShow: "changeModalShow",
  setLoading: "setLoading",
  setData: "setData",
  createData: "createData",
  deleteData: "deleteData",
  updateData: "updateData",
  setAlert: "setAlert"
}

const Reducer = (state, { type, payload }) => {
  switch (type) {
    case TYPES.changeModalShow:
      return {
        ...state,
        showModal: payload.show || false,
        modalType: payload.modalType,
        item: payload.item || {}
      }
    case TYPES.setLoading:
      return {
        ...state,
        isLoading: payload
      }
    // Data operations
    case TYPES.setData:
      if (payload.status === 400) {
        return {
          ...state,
          alertInfo: payload
        }
      } else {
        return {
          ...state,
          data: payload
        }
      }
    case TYPES.createData:
      if (payload.status === 400) {
        return {
          ...state,
          alertInfo: payload
        }
      } else {
        return {
          ...state,
          data: [...state.data, payload]
        }
      }
    case TYPES.deleteData:
      return {
        ...state,
        data: state.data.filter(d => d.id !== payload)
      }
    case TYPES.updateData:
      const itemIndex = state.data.findIndex(item => item.id === payload.id)
      const newData = [...state.data]
      newData.splice(itemIndex, 1, payload.item)
      return {
        ...state,
        data: newData
      }
    case TYPES.setAlert:
      return {
        ...state,
        alertInfo: payload
      }
    default:
      break;
  }
}

export default Reducer;