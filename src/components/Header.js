import greece from '../assets/img/greece.png'
import uk from '../assets/img/uk.png'
import {  useContext, useState} from 'react'
import EvaluatorContext from '../context/EvaluatorContext'
import questions from '../data/questions'

function Header() {
    const [activeItem,setActiveItem]= useState('en')
    const {dispatch} = useContext(EvaluatorContext)

    // Language change method 
    const handleChange = (e)=>{
        setActiveItem(e.target.id)
        dispatch({type: 'SET_LANGUAGE', language: e.target.id, questions: questions[e.target.id]}) 
    }
    
    return(
        <div className="container">
            <header>
                <div className="icons">
                    <img onClick={handleChange} id='en' className={activeItem==='en'? 'active':''} src={uk}   alt="" />
                    <img onClick={handleChange} id='el' className={activeItem==='el'? 'active':''} src={greece}   alt="" />
                </div>
            </header>
        </div>

    )
}

export default Header