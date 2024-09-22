export const INITIAL_STATE = {
  page: 1,
  character: [],
  loading: false
}
export const peticionreducer = (state, action) => {
  switch (action.type) {
    case 'sumpage':
      return { ...state, page: state.page + 1 }
    case 'decrease':
      return { ...state, page: state.page - 1 }

    case 'loading':
      return { ...state, loading: true }
    case 'character':
      return { ...state, loading: false, character: [...action.payload] }
    default:
      break
  }
}
