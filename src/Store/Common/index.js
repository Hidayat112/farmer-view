import { createSlice } from '@reduxjs/toolkit'

const commons = createSlice({
  name: 'common',
  initialState: { authToken: null },
  reducers: {
    updateAuthToken: (action, payload) => {
      console.log(action, payload, 'payload')
    },
  },
})

export const { updateAuthToken } = commons.actions

export default commons.reducer
