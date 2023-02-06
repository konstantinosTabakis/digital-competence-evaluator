const EvaluatorReducer = (state, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':

            return {
                ...state,
                language: action.language,
                questions: action.questions,
                content: action.content 
            }
        case 'ADD_RESULT':
            return {
                ...state,
                results: [...state.results, action.payload]
            }

        case 'EDIT_RESULTS':
            const updatedResult = action.payload
            const updatedResults = state.results.map((result) => {
                if (result.id === updatedResult.id) {
                    return updatedResult
                }
                return result
            });
            return {
                ...state,
                results: updatedResults,
            }
        case 'SORT_RESULTS':
            return {
                ...state,
                results: state.results.sort((x,y)=>x.id > y.id? 1: x.id < y.id? -1 : 0 )
            }

        default:
            return state
    }
}

export default EvaluatorReducer