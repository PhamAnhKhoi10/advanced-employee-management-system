import { configureStore } from "@reduxjs/toolkit";
import employeeSlice from "./slice/employeeSlice";
import hrSlice from "./slice/hrSlice";

export const store = configureStore({
  reducer: {
    employee: employeeSlice,
    hr: hrSlice,
  },
});
