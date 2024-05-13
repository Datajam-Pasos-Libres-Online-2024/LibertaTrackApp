import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { chatbotApi } from '../../services/chatbot/chatbotApi'

export const configStore = configureStore({
  reducer: {
    [chatbotApi.reducerPath]: chatbotApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      chatbotApi.middleware
      )
})

setupListeners(configStore.dispatch)