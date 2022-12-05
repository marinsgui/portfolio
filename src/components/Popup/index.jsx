import './styles.css'

import { FaWindowClose } from 'react-icons/fa';

export default function Popup(props) {
    return (props.trigger) ? (
        <div className="popup-container">
            <div className="popup-content">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>
                    <FaWindowClose />
                </button>
                {props.children}
            </div>
        </div>
    ) : '';
}