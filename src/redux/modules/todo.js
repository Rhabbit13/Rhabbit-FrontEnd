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
const CARDADD = "CARDADD";

const initialState = {
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
const card_add = createAction(CARDADD, card => ({ card }));

//미들웨이
const todoAddDB = (pid, todoText) => {
  return async function (dispatch, getstate, { history }) {
    const addTodoData = await PostAddTodoList(pid, todoText);
    console.log(addTodoData);
    dispatch(todo_add(pid, addTodoData));
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
    console.log(cardId, textId);
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
    dispatch(card_add(card));
  };
};
// Reducer
export default handleActions(
  {
    [TODODELECT]: (state, action) =>
      produce(state, draft => {
        const { id, pid } = action.payload;
        const num = draft.cards.findIndex(y => y.id === pid);
        const index = draft.cards[num].cardsDetailDtos.findIndex(
          x => x.textId === id
        );
        console.log(index);
        console.log(state);
        draft.cards[num].cardsDetailDtos.splice(index, 1);
      }),
    [TODOADD]: (state, action) =>
      produce(state, draft => {
        const { pid, todoText } = action.payload;
        console.log(pid, todoText);
        const card_num = state.cards.findIndex(x => {
          return x.cardsId === pid;
        });
        draft.cards[card_num].cardsDetailDtos.push(todoText);
      }),
    [TODOFIX]: (state, action) =>
      produce(state, draft => {
        const { pid, todoText } = action.payload;
        const card_num = state.cards.findIndex(x => {
          return x.cardsId === pid;
        });
        const detail_num = state.cards[card_num].cardsDetailDtos.findIndex(
          x => {
            return x.textId === todoText.textId;
          }
        );
        draft.cards[card_num].cardsDetailDtos[detail_num] = todoText;
      }),
    [CARDLOAD]: (state, action) =>
      produce(state, draft => {
        draft.cards = action.payload.cards;
      }),
    [CARDADD]: (state, action) =>
      produce(state, draft => {
        draft.cards.unshift(action.payload.card);
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
  card_add,
};

export { actionCreators };
