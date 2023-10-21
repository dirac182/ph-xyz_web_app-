import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const questionsApi = createApi({
    reducerPath: "questions",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5001",
    }),
    endpoints(builder) {
        return {
            fetchAllQuestionIDs: builder.query({
                query: () => {
                    return {
                        url: "/get/AllQuestionIds",
                        method: "GET"
                    }
                }
            }),
            fetchQuestionByTopic: builder.mutation({
                query: (topic) => {
                    return {
                        url: "/get/questionByTopic",
                        params: {
                            topicId: topic
                        },
                        method: "GET"
                    }
                }
            }),
            fetchQuestionSetByIds: builder.query({
                query: (Ids) => {
                    return {
                        url: "/get/questionSetByIds",
                        params: {
                            IdSet: Ids
                        },
                        method: "GET"
                    }
                }
            })
        }
    }
});

export const { useFetchQuestionSetByIdsQuery, useFetchAllQuestionIDsQuery, useFetchQuestionByTopicMutation } = questionsApi;
export { questionsApi };