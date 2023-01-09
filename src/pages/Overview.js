import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import EvaluatorContext from "../context/EvaluatorContext"

function Overview() {
    const { questions, results } = useContext(EvaluatorContext)
    const [displayResults, setDisplayResults] = useState([])
    const navigate= useNavigate()

    useEffect(() => {
        let tempResults = []
        for (let i = 0; i < questions.length; i++) {
            tempResults.push({
                id: questions[i].id,
                question: questions[i].title,
                response: results[i].result,
                category: results[i].category,
                comment: results[i].comment
            })
        }
        setDisplayResults(tempResults)
        console.log(tempResults);
    }, [results, questions])

    const handleNavigate= ()=>{
        window.scrollTo(0, 0)
        navigate('/results')
    }

    return (
        <div className="container">
            <div className="overview">
                <h2>Overview</h2>
                <div className="results">
                    {displayResults.map((el) => (
                        <div className="card">
                            <img src={require(`../assets/img/${el.category}.png`)} alt="" />
                            <h3>{el.id + ')'} {el.question}</h3>
                            <p>Category: {el.category}</p>
                            <p>Response: {el.response + " (" + el.comment + ")"}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-area">
                    <button className="btn btn-primary" onClick={handleNavigate}>Generate charts</button>
                </div>
            </div>
        </div>

    )
}

export default Overview