import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  UPDATE_USER,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  VIEW_USER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
     
      localStorage.setItem("token", action.payload.token);
       
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true
      };
    case UPDATE_USER:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload
      };
    case VIEW_USER:
      return {
        ...state,
        setUsers: action.payload
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null
      };
    default:
      return state;
  }
};
