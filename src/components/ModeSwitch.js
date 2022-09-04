import './ModeSwitch.css';

export default function ModeSwitch(props) {
    
    return (
        <label className="switch">
            <input type="checkbox" onChange={props.changeMode}/>
            <span className="slider round"></span>
        </label>
    )
}