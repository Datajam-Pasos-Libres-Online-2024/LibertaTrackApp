import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { URL_CHATBOT } from '../../helpers/constants'

export const chatbotApi = createApi({
    reducerPath: 'chatbotApi',
    baseQuery: fetchBaseQuery({ baseUrl: URL_CHATBOT }),
    endpoints: (builder) => ({

        chatbot: builder.mutation({
            query: (question) => {
                return {
                    url: 'chatbot',
                    method: 'POST',
                    body: question,
                    headers: {
                        'Content-type': 'application/json'
                    }
                }
            }
        }),

    })
})

export const { useChatbotMutation } = chatbotApi