import { createContext, useReducer } from "react"
import EvaluatorReducer from "./EvaluatorReducer"
// import questions from '../data/questions'
import questions from '../data/questions.json'
import content from "../data/content"

const EvaluatorContext = createContext()

export const EvaluatorProvider = ({ children }) => {

    const questionsPerPage= 1

    const initialState = {
        language: 'en',
        content: content.en,
        questions: questions.en,
        lastPage: Math.ceil(questions.en.length/questionsPerPage),
        questionsPerPage: questionsPerPage,
        results:[] 
    }

    const [state, dispatch] = useReducer(EvaluatorReducer, initialState)

    return <EvaluatorContext.Provider value={{ ...state, dispatch }}>
        {children}
    </EvaluatorContext.Provider>

}

export default EvaluatorContext