import { SET_CURRENT_USER, GET_USERS } from "../actions/types";
import isEmpty from "../validation/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
  users: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    default:
      return state;
  }
}
