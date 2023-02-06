import { useContext, useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import EvaluatorContext from "../context/EvaluatorContext"

function Overview() {
    const { questions, results, content } = useContext(EvaluatorContext)
    const [displayResults, setDisplayResults] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (results.length === 0) {
            navigate('/survey')
        } else {

            let tempResults = []
            for (let i = 0; i < questions.length; i++) {
                tempResults.push({
                    id: questions[i].id,
                    question: questions[i].title,
                    response: results[i].result,
                    category: questions[i].category,
                    performance: content.performance[results[i].result]
                    // performance: performance[0]
                })
            }
            setDisplayResults(tempResults)
            console.log(tempResults);
        }
        // eslint-disable-next-line
    }, [results, questions])

    const handleNavigate = () => {
        window.scrollTo(0, 0)
        navigate('/results')
    }

    return (
        <div className="container">
            <div className="overview">
                <h2>{content['overview-title']} </h2>
                <div className="results">
                    {displayResults.map((el) => (
                        <div className="card" key={el.id}>
                            <img src={require(`../assets/img/${el.category}.png`)} alt="" />
                            <h3>{el.id + ')'} {el.question}</h3>
                            <p><span className="label">{content['overview-category']}</span>: {el.category}</p>
                            <p> <span className="label">{content['overview-response']}</span>: {el.response + " (" + el.performance + ")"}</p>
                        </div>
                    ))}
                </div>
                <div className="btn-area">
                    <Link to='/survey' className="btn btn-light" >{content['overview-btn-secondary']}</Link>
                    <button className="btn btn-primary" onClick={handleNavigate}>{content['overview-btn']}</button>
                </div>
            </div>
        </div>

    )
}

export default Overview