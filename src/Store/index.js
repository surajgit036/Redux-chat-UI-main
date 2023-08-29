import { configureStore, createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { data } from "./INITIAL_STATE";

// Define the initial state
const initialState = {
  conversations: data.profile.contacts,
  currentConversation: data.profile.contacts[0],
};

// Create a slice for the conversation
const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    add: (state, action) => {
      const { id, message } = action.payload;
      const conversation = state.conversations.find(
        (contact) => contact.id === id
      );
      if (conversation) {
        conversation.chatlog.push(message);
        // Update the currentConversation if it matches the modified conversation
        if (state.currentConversation.id === id) {
          state.currentConversation = conversation;
        }
      }
    },
    set: (state, action) => {
      state.currentConversation = action.payload;
    },
  },
});

// Export the actions from the conversation slice
export const { add, set } = conversationSlice.actions;

// Create a root reducer by combining all reducers
const rootReducer = combineReducers({
  conversation: conversationSlice.reducer,
});

// Configure the persistence options
const persistConfig = {
  key: "root",
  storage,
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor
export const persistor = persistStore(store);
