import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Actions
const TODOCHECK = "TODOCHECK";
const TODODEILY = "TODODEILY";
const TODODELECT = "TODODELECT";
const TODOFIX = "TODOFIX";

const initialState = {
  user: { id: "asq12q@1Was3ddas", nickname: "올루션", achievementrate: 30 },
  post: [
    {
      id: "hjk234fghnmwasdefsdqw",
      uid: "asq12q@1Was3ddas",
      date: "1207",
      rate: 90,
    },
    {
      id: "hj4fgn33dacefdqw",
      uid: "asq12q@1Was3ddas",
      date: "1206",
      rate: 80,
    },
    {
      id: "hj4fgn33dacefdqw",
      uid: "asq12q@1Was3ddas",
      date: "1208",
      rate: 80,
    },
  ],
  todo: [
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "1122q@1Was113333Ue3dd",
      text: "10시 기상",
      checked: false,
      daily: true,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@1Wa333s113333Ue3dd",
      text: "11시 고양이",
      checked: false,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@4aas",
      text: "12시 사자",
      checked: false,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@144Ue3dd",
      text: "13시 자장가",
      checked: false,
      daily: false,
    },

    {
      pid: "hj4fgn33dacefdqw",
      id: "12q@13hh55Ue73dd",
      text: "15시 짜장면",
      checked: true,
      daily: false,
    },
    {
      pid: "hj4fgn33dacefdqw",
      id: "13313hhh3Ue3d5d",
      text: "14시 짬뽕",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "11111tttttsssdd",
      text: "12시 탕수육",
      checked: true,
      daily: false,
    },
    {
      pid: "hj4fgn33dacefdqw",
      id: "122iii13ooohhh3Ue3dd",
      text: "22시 떡복이",
      checked: true,
      daily: false,
    },
  ],
  is_login: false,
};

// Action Creators
const todo_check = createAction(TODOCHECK, (id, checked) => ({
  id,
  checked,
}));
const todo_deily = createAction(TODODEILY, (id, daily) => ({
  id,
  daily,
}));
const todo_delect = createAction(TODODELECT, id => ({
  id,
}));
const todo_fix = createAction(TODOFIX, (id, text) => ({
  id,
  text,
}));

// Reducer
export default handleActions(
  {
    [TODOCHECK]: (state, action) =>
      produce(state, draft => {
        const { id, checked } = action.payload;
        const is_todo_num = state.todo.findIndex(x => {
          return x.id === id ? true : false;
        });
        draft.todo[is_todo_num].checked = checked;
      }),
    [TODODEILY]: (state, action) =>
      produce(state, draft => {
        const { id, daily } = action.payload;
        const is_todo_nums = state.todo.findIndex(x => {
          return x.id === id ? true : false;
        });
        draft.todo[is_todo_nums].daily = daily;
      }),
    [TODODELECT]: (state, action) =>
      produce(state, draft => {
        const { id } = action.payload;
        console.log(id);
        const newTodo = state.todo.filter(x => {
          return x.id !== id;
        });
        draft.todo = newTodo;
      }),
    [TODOFIX]: (state, action) =>
      produce(state, draft => {
        const { id, text } = action.payload;
        console.log(id, text);
        const is_todo_nums = state.todo.findIndex(x => {
          return x.id === id ? true : false;
        });
        draft.todo[is_todo_nums].text = text;
      }),
  },
  initialState
);

const actionCreators = {
  todo_check,
  todo_deily,
  todo_delect,
  todo_fix,
};

export { actionCreators };
