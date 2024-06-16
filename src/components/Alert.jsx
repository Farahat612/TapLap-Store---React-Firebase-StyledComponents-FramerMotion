import { useContext } from "react";
import AlertContext from "../contexts/alertContext";

const Alert = () => {
    const { alertState } = useContext(AlertContext);

    if (!alertState) {
        return null;
    }

    const { text, type } = alertState;

    const alertStyles = {
        padding: "16px",
        borderRadius: "6px",
        fontSize: "16px",
        fontWeight: 400,
        position: 'fixed',
        zIndex: '1000000000000000',
        top: '100px',
        left: '0',
        width: '100%',
        color: type === 'danger' ? "#842029" : "#0f5132",
        background: type === 'danger' ? "#f8d7da" : "#d1e7dd",
    };

    return (
        <div style={alertStyles}>
            {text}
        </div>
    );
};

export default Alert;
