import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/ProjectsSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
});

export default store;