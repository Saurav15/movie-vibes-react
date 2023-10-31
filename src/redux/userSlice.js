import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice for managing the user state.
 */
const userSlice = createSlice({
  name: "user",
  initialState: null, // Initial state is set to null
  reducers: {
    /**
     * Action to add a user to the state.
     * @param {Object} state - The current user state.
     * @param {Object} action - The action with user data.
     * @returns {Object} - The new user state.
     */
    addUser: (state, action) => {
      return action.payload;
    },
    /**
     * Action to remove the user from the state.
     * @param {Object} state - The current user state.
     * @returns {null} - User state is set to null.
     */
    removeUser: (state) => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
