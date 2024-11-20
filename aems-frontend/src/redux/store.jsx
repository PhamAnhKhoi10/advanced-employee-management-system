import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./slice/employeeSlice";

export const store = configureStore({
  reducer: {
    employee: employeeSlice,
  },
});
