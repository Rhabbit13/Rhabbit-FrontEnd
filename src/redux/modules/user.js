import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const getUser = createAction(GET_USER, user => ({ user }));
const setUser = createAction(SET_USER, user => ({ user }));

const user_initial = {
  username: "test@naver.com",
  nickname: "이름",
  password: "123",
};

const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
         

    axios
      .post("http://15.164.215.165/user/login ", {
        username: username,
        password: password,
      })
<<<<<<< HEAD
      .then((response) => {
        console.log(response)
=======
      .then(response => {
        console.log(response);
>>>>>>> 175c0369c19f11fc2df29f61e554ef5ed1b332d0
        dispatch(
          logIn({
            token: response.headers.authorization,
            is_login: true,
          })
        );
<<<<<<< HEAD
        setCookie('Authorization', response.headers.authorization);
        console.log(
           
          response.headers.authorization
        );
        history.push("/main");
=======
        setCookie("token", JSON.stringify(response.data.token));
        history.push("/");
>>>>>>> 175c0369c19f11fc2df29f61e554ef5ed1b332d0
      })
      .catch(error => {
        console.log("Login Error", error);
        window.location.reload();
      });
  };
};

const signupDB = (username, nickname, password) => {
  return function (dispatch, getState, { history }) {
    axios
      .post("http://15.164.215.165/user/signup", {
        username: username,
        nickname: nickname,
        password: password,
      })
      .then(response => {
        dispatch(
          setUser({
            username: username,
            nickname: nickname,
            password: password,
          })
        );

        history.push("/login");
      })
<<<<<<< HEAD
      .catch((error) => {
        alert("사용 중인 이메일입니다.");
        console.log("회원가입 DB ERROR", error);
=======
      .catch(error => {
        console.log("DB ERROR", error);
>>>>>>> 175c0369c19f11fc2df29f61e554ef5ed1b332d0
      });
  };
};

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, draft => {
        draft.token = action.payload.user.token;
        draft.is_login = action.payload.user.is_login;
      }),

    [LOG_OUT]: (state, action) =>
<<<<<<< HEAD
      produce(state, (draft) => {
        deleteCookie("Authorization");
=======
      produce(state, draft => {
        deleteCookie("is_login");
>>>>>>> 175c0369c19f11fc2df29f61e554ef5ed1b332d0
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) =>
      produce(state, draft => {
        draft.nickname = action.payload.user.nickname;
        draft.username = action.payload.user.username;

        draft.is_login = true;
      }),
    [SET_USER]: (state, action) =>
      produce(state, draft => {
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
  logOut,
};

export { actionCreators };
