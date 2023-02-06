import { useState, useEffect, useContext } from "react"
import EvaluatorContext from "../context/EvaluatorContext";


function Input({ item }) {
    const {results, content, dispatch} = useContext(EvaluatorContext)
    const [selected, setSelected] = useState(-1)

    useEffect(()=>{
        const test= results.filter((el)=>el.id===item.id)
        setSelected(test.length>0? test[0].result : -1)
        // eslint-disable-next-line
    },[])

    const handleChange = (e) => {
        const type = results.filter((itm)=>itm.id ===item.id).length === 0? 'ADD_RESULT' : 'EDIT_RESULTS'
        
        dispatch({type: type, payload: {
            id: item.id,
            category: item.category,
            result: +e.target.value
        } }) 
        setSelected(+e.target.value)
    }

    return (
        <div className='container-question'>
            <h3> {item.id}{')'} {item.title}</h3>
            <p> {item.example}</p>
            <ul className="rating">
                <li>
                    <input type="radio" name={`question-${item.id}`} id={`question-${item.id}-num0`} value='0' checked={selected === 0} onChange={handleChange} />
                    <label htmlFor={`question-${item.id}-num0`}>0</label>
                    <span>{content.performance[0]}</span>
                </li>
                <li>
                    <input type="radio" name={`question-${item.id}`} id={`question-${item.id}-num1`} value='1' checked={selected === 1} onChange={handleChange} />
                    <label htmlFor={`question-${item.id}-num1`}>1</label>
                    <span>{content.performance[1]}</span>
                </li>
                <li>
                    <input type="radio" name={`question-${item.id}`} id={`question-${item.id}-num2`} value='2' checked={selected === 2} onChange={handleChange} />
                    <label htmlFor={`question-${item.id}-num2`}>2</label>
                    <span>{content.performance[2]}</span>
                </li>
                <li>
                    <input type="radio" name={`question-${item.id}`} id={`question-${item.id}-num3`} value='3' checked={selected === 3} onChange={handleChange} />
                    <label htmlFor={`question-${item.id}-num3`}>3</label>
                    <span>{content.performance[3]}</span>
                </li>
                <li>
                    <input type="radio" name={`question-${item.id}`} id={`question-${item.id}-num4`} value='4' checked={selected === 4} onChange={handleChange} />
                    <label htmlFor={`question-${item.id}-num4`}>4</label>
                    <span>{content.performance[4]}</span>
                </li>
                <li>
                    <input type="radio" name={`question-${item.id}`} id={`question-${item.id}-num5`} value='5' checked={selected === 5} onChange={handleChange} />
                    <label htmlFor={`question-${item.id}-num5`}>5</label>
                    <span>{content.performance[5]}</span>
                </li>
            </ul>
        </div>
    )
}

export default Input