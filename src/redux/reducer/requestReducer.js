import {createSlice} from '@reduxjs/toolkit';

const requestSlice = createSlice({
  name: 'request',
  initialState: {
    is_new_request: false,
  },
  reducers: {
    setNewRequest: (state, action) => {
      const {type, payload} = action;
      return {
        ...state,
        is_new_request: true,
      };
    },
    setHideNewRequest: (state, action) => {
      const {type, payload} = action;
      return {
        ...state,
        is_new_request: false,
      };
    },
  },
});
export const {setNewRequest, setHideNewRequest} = requestSlice.actions;
export default requestSlice.reducer;
