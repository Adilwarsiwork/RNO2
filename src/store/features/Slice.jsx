import { getNews } from "@/sanity/sanity-client";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getAllNews = createAsyncThunk("newsdata", async () => {
  const response = await getNews();
  return response;
});

export const newsData = createSlice({
  name: "newsdata",
  initialState: {
    news: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getAllNews.pending]: (state) => {
      state.loading = true;
    },
    [getAllNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.news = action.payload;
    },
    [getAllNews.rejected]: (state, action) => {
      state.loading = false;
      state.news = action.payload;
    },
  },
});

export default newsData.reducer;
