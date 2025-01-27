import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    dashboard: 1,
    usertable: 2,
    producttable: 3,
  },
};

// Create the slice to handle the order
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload.order;
    },
  },
});

// Export actions
export const { setOrder } = layoutSlice.actions;

// Export the reducer
export default layoutSlice.reducer;
