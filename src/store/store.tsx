import { configureStore } from "@reduxjs/toolkit";
import newsData from "./features/Slice";
export const store = configureStore({
  reducer: {
    app: newsData,
  },
});
