import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';

const authenticating = () => ({
  type: AUTH_REQUEST,
});

const authenticate = (userData) => ({
  type: AUTH_SUCCESS,
  payload: userData,
});

const authError = (error) => ({
  type: AUTH_FAILURE,
  error: 'Failed to authenticate',
  payload: error,
});


export const login = () => {
  return async (dispatch) => {
    dispatch(authenticating());
    try {
      const {data} = await axios.get("/auth")
      dispatch(authenticate(data));
    } catch (error) { dispatch(authError(error)) }
  };
}


const authReducer = (state = { user: {}, isFetching: false }, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return { isFetching: true }
    case AUTH_SUCCESS:
      return { user: action.payload, isFetching: false };
    default:
      return state;
  }
};


export default authReducer;