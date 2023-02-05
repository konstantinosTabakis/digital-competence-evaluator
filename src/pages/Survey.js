import { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Input from "../components/Input"
import ProgressBar from "../components/ProgressBar"
import EvaluatorContext from "../context/EvaluatorContext"

function Survey() {
    const { questions, lastPage, results, content, dispatch} = useContext(EvaluatorContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [displayQuestions, setDisplayQuestions] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setDisplayQuestions(questions.filter((el) => el.id <= currentPage * 5 && el.id > (currentPage - 1) * 5))
    }, [questions, currentPage])

    const handleNext = () => {
        if (results.length < currentPage * 5) {
            alert('Please answer all questions')
        } else {
            setCurrentPage(currentPage + 1)
        }
        window.scrollTo(0, 0)
    }
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1)
        window.scrollTo(0, 0)
    }
    const handleSubmit = () => {
        if (results.length === questions.length) {
            console.log(results);
            dispatch({type: 'SORT_RESULTS'}) 
            navigate('/overview')
        } else {
            alert('Please answer all questions')
        }
    }

    return (
        <div className="container">
            <ProgressBar currentPage={currentPage} lastPage={lastPage}/>
            <div className="survey-wrapper">
                {displayQuestions.map((el) => (
                    <Input key={el.id} item={el} />
                ))}
                <div className="btns">

                    {currentPage < lastPage ?
                        <>
                            {currentPage > 1 &&
                                <button className="btn btn-light" onClick={handlePrevious}>{content['previous-btn']}</button>
                            }
                            <button className="btn btn-primary" onClick={handleNext}>{content['next-btn']}</button>
                        </>
                        :
                        <>
                            <button className="btn btn-light" onClick={handlePrevious}>{content['previous-btn']}</button>
                            <button className="btn btn-primary" onClick={handleSubmit}>{content['submit-btn']}</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Survey