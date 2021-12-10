import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {
  PostAddTodoList,
  PutFixTodoList,
  DelectTodoList,
  LoadCardList,
  AddCardList,
} from "../../shared/todocard";
import { getCookie } from "../../shared/Cookie";

import axios from "axios";
// Actions
const TODOADD = "TODOADD";
const TODODELECT = "TODODELECT";
const TODOFIX = "TODOFIX";
const CARDLOAD = "CARDLOAD";

const initialState = {
  user: {
    id: "asq12q@1Was3ddas",
    username: "cwed222",
    nickname: "올루션",
    achievementrate: 30,
  },
  cards: [],
};

// Action Creators

const todo_delect = createAction(TODODELECT, (id, pid) => ({
  id,
  pid,
}));
const todo_fix = createAction(TODOFIX, (pid, todoText) => ({
  pid,
  todoText,
}));
const todo_add = createAction(TODOADD, (pid, todoText) => ({
  todoText,
  pid,
}));
const card_load = createAction(CARDLOAD, cards => ({
  cards,
}));

//미들웨이
const todoAddDB = (pid, todoText) => {
  return function (dispatch, getstate, { history }) {
    // const addTodoData = PostAddTodoList(pid, todoText);
    const addTodoData = Math.random().toString(36).substr(2, 16);
    const newtodo = { ...todoText, id: addTodoData };
    console.log(newtodo);
    dispatch(todo_add(pid, newtodo));
  };
};

const todoFixDB = (pid, todoText) => {
  return function (dispatch, getstate, { history }) {
    const FixTodoData = PutFixTodoList(pid, todoText);
    dispatch(todo_fix(pid, todoText));
  };
};
const todoDelectDB = (cardId, textId) => {
  return function (dispatch, getstate, { history }) {
    DelectTodoList(cardId, textId);
    dispatch(todo_delect(cardId, textId));
  };
};
const cardLoadDB = () => {
  return async function (dispatch, getstate, { history }) {
    const cards = await LoadCardList();
    dispatch(card_load(cards));
  };
};
const cardAddDB = data => {
  return async function (dispatch) {
    const card = await AddCardList(data);
    console.log(card);
  };
};
// Reducer
export default handleActions(
  {
    [TODODELECT]: (state, action) =>
      produce(state, draft => {
        const { id, pid } = action.payload;
        const num = draft.cards.findIndex(y => y.id === pid);
        const index = draft.cards[num].cardDetails.findIndex(x => x.id === id);
        console.log(index);
        console.log(state);
        draft.cards[num].cardDetails.splice(index, 1);
      }),
    [TODOADD]: (state, action) =>
      produce(state, draft => {
        const { pid, todoText } = action.payload;
        console.log(pid, todoText);
        const card_num = state.cards.findIndex(x => {
          return x.id === pid;
        });
        draft.cards[card_num].cardDetails.push(todoText);
      }),
    [TODOFIX]: (state, action) =>
      produce(state, draft => {
        const { pid, todoText } = action.payload;
        const card_num = state.cards.findIndex(x => {
          return x.id === pid;
        });
        const detail_num = state.cards[card_num].cardDetails.findIndex(x => {
          return x.id === todoText.id;
        });
        draft.cards[card_num].cardDetails[detail_num] = todoText;
      }),
    [CARDLOAD]: (state, action) =>
      produce(state, draft => {
        draft.cards = action.payload.cards;
      }),
  },
  initialState
);

const actionCreators = {
  todo_delect,
  todo_fix,
  todo_add,
  todoAddDB,
  todoFixDB,
  todoDelectDB,
  cardLoadDB,
  card_load,
  cardAddDB,
};

export { actionCreators };
