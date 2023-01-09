import { useContext, useState, useEffect } from "react"
import Input from "../components/Input"
import EvaluatorContext from "../context/EvaluatorContext"
function Survey() {
    const { questions, lastPage, results } = useContext(EvaluatorContext)
    const [currentPage, setCurrentPage] = useState(1)
    const [displayQuestions, setDisplayQuestions] = useState([])

    useEffect(() => {
        setDisplayQuestions(questions.filter((el) => el.id <= currentPage * 5 && el.id > (currentPage - 1) * 5))
    }, [questions, currentPage])

    const handleNext = () => {
        if (results.length < currentPage * 5) {
            alert('Please answer all questions')
        } else {
            setCurrentPage(currentPage + 1)
        }
    }
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1)
    }
    const handleSubmit = () => {
        if (results.length === questions.length) {
            console.log(results);
        } else {
            alert('Please answer all questions')
        }
    }

    return (
        <div className="container">
            <div className="survey-wrapper">
                {displayQuestions.map((el) => (
                    <Input key={el.id} item={el} />
                ))}
                <div className="btns">

                    {currentPage < lastPage ?
                        <>
                            {currentPage > 1 &&
                                <button className="btn btn-light" onClick={handlePrevious}>Back</button>
                            }
                            <button className="btn btn-primary" onClick={handleNext}>Next</button>
                        </>
                        :
                        <>
                            <button className="btn btn-light" onClick={handlePrevious}>Back</button>
                            <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Survey