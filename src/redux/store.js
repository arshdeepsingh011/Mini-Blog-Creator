import { configureStore } from '@reduxjs/toolkit';
import postsSlices from "../redux/slices/postsSlices"

const store = configureStore({
  reducer: {
    posts: postsSlices,
  },
});

export default store;
