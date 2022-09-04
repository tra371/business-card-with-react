import './Footer.css'

function Footer(props) {

    let backgroundStyle = {
        backgroundColor: props.darkMode ? "#161619" : "#5093E2"
    }

    let iconColorStyle = {
        color: props.darkMode ? "inherit" : "#161619"
    }

    return (
        <footer className="card-footer" style={backgroundStyle}>
            <a href="#" style={iconColorStyle}><i className="fa-brands fa-square-twitter fa-xl"></i></a>
            <a href="#" style={iconColorStyle}><i className="fa-brands fa-square-facebook fa-xl"></i></a>
            <a href="#" style={iconColorStyle}><i className="fa-brands fa-square-instagram fa-xl"></i></a>
            <a href="#" style={iconColorStyle}><i className="fa-brands fa-square-github fa-xl"></i></a>
        </footer>
    )
}

export default Footer