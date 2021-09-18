import { createSlice } from "@reduxjs/toolkit";


export const computerSlice = createSlice({
  name: "computer",
  initialState: { value: { mark: null, storage: null, all: true } },
  reducers: {
    setMark: (state, action) => {
      state.value.mark = action.payload;
      state.value.all = false;
    },
    setStorage: (state, action) => {
        state.value.storage = action.payload;
        state.value.all = false;
    },
    setAll: (state) => {
        state.value = { mark: null, storage: null, all: true };
    },
  },
});

export const { setMark, setStorage, setAll } = computerSlice.actions;

export default computerSlice.reducer;
