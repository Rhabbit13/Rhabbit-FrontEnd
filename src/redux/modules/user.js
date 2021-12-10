import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import axios from "axios";
import { actionCreators as todoAction } from "./todo";
import moment from "moment";

const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const LOAD_TOKEN = "LOAD_TOKEN";

const logIn = createAction(LOG_IN, user => ({ user }));
const logOut = createAction(LOG_OUT, user => ({ user }));
const loadToken = createAction(LOAD_TOKEN, boo => ({ boo }));

const user_initial = {
  is_login: false,
};

const loadTokenBrowser = () => {
  return function (dispatch) {
    if (getCookie("Authorization")) {
      dispatch(loadToken());
    }
  };
};

const loginDB = (username, password) => {
  return function (dispatch, getState, { history }) {
    const date = moment().format("YYYYMMDD");
    axios
      .post("http://15.164.215.165/user/login ", {
        username: username,
        password: password,
      })
      .then(response => {
        console.log(response);
        dispatch(
          logIn({
            is_login: true,
          })
        );
        setCookie("Authorization", response.headers.authorization);
        dispatch(todoAction.cardLoadDB());

        const cards = getState().todo.cards;
        const findCard = cards.find(item => {
          return item.date === date;
        });
        if (cards === null) {
          dispatch(todoAction.cardAddDB());
        }
        if (findCard === undefined) {
          dispatch(todoAction.cardAddDB());
        } else {
          history.push("/");
        }
      })
      .catch(error => {
        console.log("Login Error", error);
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
        history.push("/login");
      })
      .catch(error => {
        alert("사용 중인 이메일입니다.");
        console.log("회원가입 DB ERROR", error);
      });
  };
};

export default handleActions(
  {
    [LOG_IN]: (state, action) =>
       produce(state, (draft) => {

 
        draft.token = action.payload.user.token;
        draft.is_login = action.payload.user.is_login;
        draft.username = action.payload.user.is_login;
       }),

    [LOG_OUT]: (state, action) =>
      produce(state, draft => {
        draft.is_login = false;
      }),
    [LOAD_TOKEN]: (state, action) =>
      produce(state, draft => {
        draft.is_login = true;
      }),
  },
  user_initial
);

const actionCreators = {
  signupDB,
  loginDB,
  logOut,
  loadTokenBrowser,
};

export { actionCreators };
