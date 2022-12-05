import './styles.css'

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-container">
            <div className="popup-content">
                <button className="close-btn">close</button>
                {props.children}
            </div>
        </div>
    ) : '';
}