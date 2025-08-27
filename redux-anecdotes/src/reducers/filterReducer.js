export const updateFilter = (filter) => {
  console.log(filter)
}

const initialState = ""
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload.content
    default:
      return state
  }
}

export default filterReducer
