import hero from '../assets/img/hero.png'
import safety from '../assets/img/safety.png'
import information from '../assets/img/information.png'
import communication from '../assets/img/communication.png'
import production from '../assets/img/production.png'
import { Link } from 'react-router-dom'
import EvaluatorContext from '../context/EvaluatorContext'
import { useContext } from 'react'

function Home() {
    const { content } = useContext(EvaluatorContext)

    return (
        <>
            <div className="container">
                <div className="hero-wrapper">
                    <div>
                        <h1 className='hero-title'>Digital Competence Evaluator</h1>
                        <p className="hero-text">
                            {content['hero-text']}
                        </p>
                        <div className="hero-btns">
                            <Link to="/survey"><button className='btn btn-secondary'>{content['home-cta-primary']}</button></Link>
                            <a href="#about"><button className='btn btn-light'>{content['home-cta-secondary']}</button></a>
                        </div>
                    </div>
                    <div>
                        <img src={hero} className='hero-img' alt="" />
                    </div>

                </div>
            </div>
            <div className="about" id='about'>
                <div className="container">
                    <h2>{content['about-title']}</h2>
                    <p>{content['about-text']}</p>
                    <div className="about-grid">
                        <div className="item">
                            <div className="img-area">
                                <img src={information} alt="" />
                            </div>
                            <h4>{content['category1']}</h4>
                            <p>{content['category1-text']}</p>
                        </div>
                        <div className="item">
                            <div className="img-area">
                                <img src={communication} alt="" />
                            </div>
                            <h4>{content['category2']}</h4>
                            <p>{content['category2-text']}</p>
                        </div>
                        <div className="item">
                            <div className="img-area">
                                <img src={production} alt="" />
                            </div>
                            <h4>{content['category3']}</h4>
                            <p>{content['category3-text']}</p>
                        </div>
                        <div className="item">
                            <div className="img-area">
                                <img src={safety} alt="" />
                            </div>
                            <h4>{content['category4']}</h4>
                            <p>{content['category4-text']}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home