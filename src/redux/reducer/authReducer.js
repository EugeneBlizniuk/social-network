import { authAPI } from "../../api/API";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export const setUserData = ({ id, email, login }) => ({ type: SET_USER_DATA, data: { id, email, login } });

export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
    .then(response => {
      if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setUserData({ id, email, login }));
      }
    });
}

export default authReducer;