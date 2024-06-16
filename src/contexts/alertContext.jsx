/* eslint-disable react/prop-types */
import  { createContext, useEffect, useReducer, useContext } from "react";

const AlertContext = createContext();

const initialState = {
    alert: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SHOW_ALERT":
            return { ...state, alert: { text: action.payload.text, type: action.payload.type } };
        case "HIDE_ALERT":
            return { ...state, alert: null };
        default:
            return state;
    }
};

export const AlertProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        let timeout;
        if (state.alert) {
            timeout = setTimeout(() => {
                dispatch({ type: "HIDE_ALERT" });
            }, 4000);
        }
        return () => clearTimeout(timeout);
    }, [state.alert]);

    const showAlert = (text, type) => {
        dispatch({ type: "SHOW_ALERT", payload: { text, type } });
    };

    return (
        <AlertContext.Provider value={{ alertState: state.alert, showAlert }}>
            {children}
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const { showAlert } = useContext(AlertContext);
    return showAlert;
};

export default AlertContext;
