import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";
import getToken from "../../shared/Token";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, (user) => ({ user }));

const user_initial = {
  username: "test@naver.com",
  nickname: "이름",
  password: "123",
};

const getUserDB = () => {
  return function (dispatch, getState, { history }) {
    const token = getToken();

    axios
      .get("http:/18.224.37.224/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        dispatch(
          getUser({
            nickname: response.data.nickname,
            id: response.data.id,
          })
        );
      });
  };
};

const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://18.224.37.224/user/login ", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        dispatch(
          logIn({
            token: response.data.token,
            is_login: true,
          })
        );
        setCookie(
          "token",
          JSON.stringify(response.data.token)
        );
        history.push("/");
      })
      .catch((error) => {
        console.log("Login Error", error);
      });
  };
};

const signupDB = (username, password, nickname) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://18.224.37.224/user/signup", {
        nickname: nickname,
        username: username,
        password: password,
      })
      .then((response) => {
        dispatch(
          setUser({
            nickname: nickname,
            username: username,
            password: password,
          })
        );
        history.push("/login");
      })
      .catch((error) => {
        console.log("DB ERROR", error);
      });
  };
};

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        draft.token = action.payload.user.token;
        draft.is_login = action.payload.user.is_login;
      }),

    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.nickname = action.payload.user.nickname;
        draft.username = action.payload.user.username;
        draft.is_login = true;
      }),
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.nickname = action.payload.user.nickname;
        draft.username = action.payload.user.username;
        draft.password = action.payload.user.password;
        
      }),
  },
  user_initial
);

const actionCreators = {
  signupDB,
  loginDB,
  getUserDB,
  logOut,
};

export { actionCreators };
