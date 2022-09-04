import {useState} from 'react';
import profilepic from './images/profile_pic.jpg'
import InfoSection from './components/InfoSection'
import Footer from './components/Footer'
import ModeSwitch from './components/ModeSwitch'
import './App.css'

function App() {
    const [isDark, setIsDark] = useState('false')

    function handleOnChange(){
        setIsDark(!isDark)
    }

    let cardBackgroundStyle = {
        backgroundColor: isDark ? "#1A1B21" : "#DCDCDC"
    }

    let textColorStyle1 = {
        color: isDark ? "#FFFFFF" : "#1A1B21"
    }

    let textColorStyle2 = {
        color: isDark ? "#F3BF99" : "#016353"
    }

    let btnColorEmailStyle = {
        color: isDark ? "#374151" : "#FFFFFF",
        backgroundColor: isDark ? "#FFFFFF" : "#374151"
    }

    let btnColorLinkedInStyle = {
        color: isDark ? "#FFFFFF" : "#161619"
    }

    return (
        <div>
            <ModeSwitch changeMode={handleOnChange} />
            <div className="card-container" style={cardBackgroundStyle}>

                <img src={profilepic} className="card-image"/>
                <h1 className="card-name" style={textColorStyle1}>Tuna</h1>
                <p className="card-role" style={textColorStyle2}>Backend Developer</p>
                <a href="#" className="card-email" style={textColorStyle1}>tuna@webdev.com</a>
                <div className="card-btn">
                    <button href="#" className="btn-email" style={btnColorEmailStyle}><span className="icon-email"><i className="fa-solid fa-envelope"></i></span>Email</button>
                    <button href="#" className="btn-linkedin" style={btnColorLinkedInStyle}><span className="icon-linkedin"><i className="fa-brands fa-linkedin"></i></span>LinkedIn</button>
                </div>

                <InfoSection darkMode={isDark}/>

                <Footer darkMode={isDark}/>

                </div>
        </div>
        
    )
}

export default App