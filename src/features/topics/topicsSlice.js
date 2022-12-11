import { createSlice } from "@reduxjs/toolkit";

//* Define the options that createSlice will use
const sliceOptions = {
  name: "topics",
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon: icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
};

//* Create a new slice of state with the sliceOptions configuration object
export const topicsSlice = createSlice(sliceOptions);

//* Selectors
export const selectTopics = (state) => state.topics.topics;

//* Action creators generated by createSlice()
export const { addTopic, addQuizId } = topicsSlice.actions;

//* export the reducer generated by createSlice()
export default topicsSlice.reducer;
