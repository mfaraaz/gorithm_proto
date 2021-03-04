import { combineReducers } from 'redux';
import questions from '../components/questions';

const questionReducer = () => {
    return questions;
}

const selectedQuestionReducer = (selectedQuestion = null, action) => {
    if (action.type === 'QUESTION_SELECTED')
        return action.payload;

    return selectedQuestion;
}

export default combineReducers({
    questions: questionReducer,
    selectedQuestion: selectedQuestionReducer
});

