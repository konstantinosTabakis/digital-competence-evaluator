import greece from '../assets/img/greece.png'
import uk from '../assets/img/uk.png'
import home from '../assets/img/home.png'
import { useContext, useState } from 'react'
import EvaluatorContext from '../context/EvaluatorContext'
// import questions from '../data/questions'
import questions from '../data/questions.json'
import content from '../data/content'
import { Link } from 'react-router-dom'

function Header() {
    const [activeItem, setActiveItem] = useState('en')
    const { dispatch } = useContext(EvaluatorContext)

    // Language change method 
    const handleChange = (e) => {
        setActiveItem(e.target.id)
        dispatch({ type: 'SET_LANGUAGE', language: e.target.id, questions: questions[e.target.id], content: content[e.target.id] })
    }

    return (
        <div className="container">
            <header>
                <div className="icons">
                    <div className="icons-inner">
                        {/* <Link to='/' className='logo'>DCE</Link> */}
                        <Link to='/' ><img className='home' src={home} alt="" /></Link> 
                        <img onClick={handleChange} id='en' className={activeItem === 'en' ? 'active' : ''} src={uk} alt="" />
                        <img onClick={handleChange} id='el' className={activeItem === 'el' ? 'active' : ''} src={greece} alt="" />
                    </div>
                </div>
            </header>
        </div>

    )
}

export default Header