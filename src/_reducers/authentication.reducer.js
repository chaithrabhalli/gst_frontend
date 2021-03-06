import { userConstants } from '../_constants';

let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state
  }
}

export function otp_generation(state = {
  otp_request:false,
  otp_success:false,
  email: {},
  mobile: {},
  type: {}
}, action) {
  switch (action.type) {
    case userConstants.OTP_REQUEST:
      return {
        otp_request: true,
        email: action.useremail,
        mobile: action.usermobile,
        type: action.type
      };
    case userConstants.OTP_SUCCESS:
      return {
        otp_request:false,        
        otp_success:true,
        email: action.useremail,
        mobile: action.usermobile,
        type: action.type
      };
    case userConstants.OTP_FAILURE:
      return {};
    default:
      return state
  }
}