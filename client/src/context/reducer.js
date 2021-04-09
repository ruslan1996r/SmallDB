export const TYPES = {
  changeModalShow: "changeModalShow",
}

const Reducer = (state, { type, payload }) => {
  console.log("statestatestatestatestate: ", state)
  switch (type) {
    case TYPES.changeModalShow:
      return {
        ...state,
        showModal: payload
      }
    default:
      break;
  }
}

export default Reducer;