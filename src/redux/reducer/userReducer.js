import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
    userToken: '',
  },
  reducers: {
    setUser: (state, action) => {
      const {type, payload} = action;
      return {
        ...state,
        userInfo: payload,
      };
    },
    setToken: (state, action) => {
      const {type, payload} = action;
      return {
        ...state,
        userToken: payload,
      };
    },
    logOutUser: (state, action) => {
      const {type, payload} = action;
      return {
        userInfo: {},
        userToken: '',
      };
    },
  },
});
export const {setUser, setToken, logOutUser} = userSlice.actions;
export default userSlice.reducer;
