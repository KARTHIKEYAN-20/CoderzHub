import * as api from '../api'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.signIn(authData)
        dispatch({ type: 'AUTH', data })
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({ type: 'AUTH', data })
        navigate('/');
    } catch (error) {
        console.log(error.message);
    }
}