import Cookies from "js-cookie";

export function postReducer(state = null, action) {
  switch (action.type) {
    case "POST_REQUEST":
      return { ...state, loading: true, error: "" };
    case "POST_SUCESS":
      return { ...state, loading: false, posts: action.payload, error: "" };
    case "POST_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
