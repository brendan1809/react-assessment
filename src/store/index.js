import { configureStore } from "@reduxjs/toolkit";
import chartReducer from "./chartSlice";
import tableReducer from "./tableSlice";
import layoutReducer from "./layoutSlice";

export const store = configureStore({
  reducer: {
    chart: chartReducer,
    table: tableReducer,
    layout: layoutReducer,
  },
});
