import { Fragment, useContext } from "react"
import context from "../context";

export const Login = () => {
    const { state, dispatch } = useContext(context)
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch({type: "EVALUATE-LOGIN"})
    }
    const usernameHandler = (event) => {
        dispatch({ type: "SET-USERNAME", payload: event.target.value })
    }
    const passwordHandler = (event) => {
        dispatch({ type: "SET-PASSWORD", payload: event.target.value })
    }
    return <Fragment>
        <form style={{ display: state.isLoggedin ? "none" : "block" }} action="" onSubmit={submitHandler}>
            <input placeholder="Username" type="text" name="username" value={state.username} onChange={usernameHandler} />
            <input placeholder="Password" type="password" name="password" value={state.password} onChange={passwordHandler}/>
            <button>Login</button>
        </form>
    </Fragment>
}