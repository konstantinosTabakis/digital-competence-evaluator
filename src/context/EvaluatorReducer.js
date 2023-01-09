const EvaluatorReducer = (state, action) =>{
    switch(action.type){
        case 'SET_LANGUAGE':
             
            return{
                ...state,
                language: action.language,
                questions: action.questions
            }
        
         
        
        default:
            return state
    }
}

export default EvaluatorReducer