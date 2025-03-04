import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./personSlice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("personState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error("Failed to load state:", error);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("personState", serializedState);
  } catch (error) {
    console.error("Failed to save state:", error);
  }
};

const preloadedState = loadState();

const store = configureStore({
  reducer: {
    person: personReducer,
  },
  preloadedState: preloadedState ? { person: preloadedState } : undefined,
});

// Subscribe to store changes and save state
store.subscribe(() => {
  saveState(store.getState().person);
});

export default store;
