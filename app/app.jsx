import { StrictMode, useReducer } from 'react';
import { render } from 'react-dom';
import style from './app.css';
import reducer from './reducer';
import { Provider } from './context';
import { Login } from './login/login';

const App = () => {
    const initialState = {
        username: "",
        password: "",
        isLoggedin: false
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    return <StrictMode>
        <Provider value={{ state, dispatch }}>
            <Login></Login>
            <h1 style={{ display: state.isLoggedin ? "block" : "none" }}>Welcome {state.username}</h1>
        </Provider>
    </StrictMode>
};

render(<App />, document.querySelector('article'));