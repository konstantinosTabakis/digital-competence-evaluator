import { createContext, useReducer } from "react"
import EvaluatorReducer from "./EvaluatorReducer"
import questions from '../data/questions'

const EvaluatorContext = createContext()

export const EvaluatorProvider = ({ children }) => {
    const initialState = {
        language: 'en',
        questions: questions.en,
        lastPage: Math.ceil(questions.en.length/5),
        results:[] 
    }

    const [state, dispatch] = useReducer(EvaluatorReducer, initialState)

    return <EvaluatorContext.Provider value={{ ...state, dispatch }}>
        {children}
    </EvaluatorContext.Provider>

}

export default EvaluatorContext