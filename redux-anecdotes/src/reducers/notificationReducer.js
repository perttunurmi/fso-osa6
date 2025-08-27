import { createSlice } from '@reduxjs/toolkit'

const initialState = ""
const notificationSlicer = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    clearMessage() {
      return ""
    },
  }
})

export default notificationSlicer.reducer
export const { setMessage, clearMessage, vote } = notificationSlicer.actions
