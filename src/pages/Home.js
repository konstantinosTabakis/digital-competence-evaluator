import hero from '../assets/img/hero.png'
import safety from '../assets/img/safety.png'
import information from '../assets/img/information.png'
import communication from '../assets/img/communication.png'
import production from '../assets/img/production.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className="container">
                <div className="hero-wrapper">
                    <div>
                        <h1 className='hero-title'>Digital Competence Evaluator</h1>
                        <p className="hero-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam, mollitia ut ad autem excepturi nam. Itaque, excepturi velit. Accusamus!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, dolorem?
                        </p>
                        <div className="hero-btns">
                            <Link to="/survey"><button className='btn btn-secondary'>Start Survey</button></Link>
                            <a href="#about"><button className='btn btn-light'>Learn more</button></a>
                        </div>
                    </div>
                    <div>
                        <img src={hero} className='hero-img' alt="" />
                    </div>

                </div>
            </div>
            <div className="about" id='about'>
                <div className="container">
                    <h2>About</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, reiciendis voluptate, consequatur repudiandae ab doloremque adipisci fugiat explicabo ut, sunt amet sapiente dolore molestias mollitia architecto tempore quibusdam soluta aliquid.</p>
                    <div className="about-grid">
                        <div className="item">
                            <div className="img-area">
                                <img src={information} alt="" />
                            </div>
                            <h4>Information</h4>
                            <p>Ability to identify, locate, retrieve, store, organise and analyse digital information and evaluate relevance and purpose.</p>
                        </div>
                        <div className="item">
                            <div className="img-area">
                                <img src={communication} alt="" />
                            </div>
                            <h4>Communication</h4>
                            <p>Ability to communicate, collaborate, interact with and participate in virtual teams and networks as well as make use of appropriate media, tone and behavior.</p>
                        </div>
                        <div className="item">
                            <div className="img-area">
                                <img src={production} alt="" />
                            </div>
                            <h4>Production</h4>
                            <p>Ability to create, configure, and edit digital content, solve digital problems and explore new ways to take advantage of technology.</p>
                        </div>
                        <div className="item">
                            <div className="img-area">
                                <img src={safety} alt="" />
                            </div>
                            <h4>Safety</h4>
                            <p>Ability to use digital technology safely and sustainably in relation to data, identity and work injuries and to pay attention to legal consequences, rights and duties.</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home