import profilepic from './images/profile_pic.jpg'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import './App.css'

function App() {
    return (
        <div className="card-container">

            <img src={profilepic} className="card-image"/>
            <h1 className="card-name">Tuna</h1>
            <p className="card-role">Backend Developer</p>
            <a href="#" className="card-email">tuna@webdev.com</a>
            <div className="card-btn">
                <button href="#" className="btn-email"><span className="icon-email"><i className="fa-solid fa-envelope"></i></span>Email</button>
                <button href="#" className="btn-linkedin"><span className="icon-linkedin"><i className="fa-brands fa-linkedin"></i></span>LinkedIn</button>
            </div>

            <InfoSection />
            
            <Footer />
            
        </div>
    )
}

export default App