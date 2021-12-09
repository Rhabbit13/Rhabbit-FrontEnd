import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// Actions
const TODOCHECK = "TODOCHECK";
const TODOADD = "TODOADD";
const TODODELECT = "TODODELECT";
const TODOFIX = "TODOFIX";

const initialState = {
  user: {
    id: "asq12q@1Was3ddas",
    username: "cwed222",
    nickname: "올루션",
    achievementrate: 30,
  },
  cards: [
    {
      id: "asq11hhhjfgwafvcb@3345s",
      user: {
        id: "asq12q@1Was3ddas",
        username: "username",
        nickname: "nickname",
        password:
          "$2a$10$m9Ip/m4/OrhNrbLragyZl.EjITANGCCetrt8ERIw/ZWoP6HdASRyq",
      },
      cardDetails: [
        {
          id: "1122q@1Was113333Ue3dd",
          text: "10시 기상",
          checked: false,
          daily: true,
        },
        {
          id: "12q@144Ue3dd",
          text: "13시 자장가",
          checked: false,
          daily: true,
        },
        {
          id: "12q@4aas",
          text: "12시 사자",
          checked: false,
          daily: true,
        },
        {
          id: "12q@13hh55Ue73dd",
          text: "15시 짜장면",
          checked: true,
          daily: false,
        },
        {
          id: "12q@1Wa333s113333Ue3dd",
          text: "11시 고양이",
          checked: true,
          daily: false,
        },
      ],
      date: "20211209",
    },
    {
      id: "asq11hhssssshjfgwafvcb@3345s",
      user: {
        id: "asq12q@1Was3ddas",
        username: "username",
        nickname: "nickname",
        password:
          "$2a$10$m9Ip/m4/OrhNrbLragyZl.EjITANGCCetrt8ERIw/ZWoP6HdASRyq",
      },
      cardDetails: [
        {
          id: "s3Ue3dd",
          text: "10시 기상",
          checked: false,
          daily: true,
        },
        {
          id: "12q@13hhe73dd",
          text: "15시 짜장면",
          checked: true,
          daily: false,
        },
        {
          id: "d3333Ue3dd",
          text: "11시 고양이",
          checked: false,
          daily: false,
        },
        {
          id: "1fassss1s",
          text: "12시 사자",
          checked: false,
          daily: false,
        },
        {
          id: "12q@gUe3dd",
          text: "13시 자장가",
          checked: false,
          daily: false,
        },
      ],
      date: "20211208",
    },
  ],
};

// Action Creators

const todo_delect = createAction(TODODELECT, id => ({
  id,
}));
const todo_fix = createAction(TODOFIX, (pid, todoText) => ({
  pid,
  todoText,
}));
const todo_add = createAction(TODOADD, (pid, todoText) => ({
  todoText,
  pid,
}));

// Reducer
export default handleActions(
  {
    [TODODELECT]: (state, action) =>
      produce(state, draft => {
        const { id } = action.payload;
        console.log(id);
        const newTodo = state.todo.filter(x => {
          return x.id !== id;
        });
        draft.todo = newTodo;
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
  },
  initialState
);

const actionCreators = {
  todo_delect,
  todo_fix,
  todo_add,
};

export { actionCreators };
