// widgets.js

// Actions
const LOAD = "my-app/widgets/LOAD";
const CREATE = "my-app/widgets/CREATE";
const UPDATE = "my-app/widgets/UPDATE";
const REMOVE = "my-app/widgets/REMOVE";

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
      id: "hnmwdasdefsd2qw",
      uid: "asq12q@1Was3ddas",
      date: "1206",
      rate: 70,
    },
    {
      id: "hj12fghda123dqw",
      uid: "asq12q@1Was3ddas",
      date: "1205",
      rate: 100,
    },
    {
      id: "hjk2fasdghn1wefsdqw",
      uid: "asq12q@1Was3ddas",
      date: "1204",
      rate: 30,
    },
    {
      id: "hjk2mfadawefsqw",
      uid: "asq12q@1Was3ddas",
      date: "1203",
      rate: 50,
    },
    {
      id: "hjk2ghnmfadabnqw",
      uid: "asq12q@1Was3ddas",
      date: "1202",
      rate: 50,
    },
    {
      id: "h44jkda123bnqw",
      uid: "asq12q@1Was3ddas",
      date: "1201",
      rate: 0,
    },
    {
      id: "hjk234fs22dnbnq111w",
      uid: "asq12q@1Was3ddas",
      date: "1131",
      rate: 0,
    },
  ],
  todo: [
    {
      pid: "hnmwdasdefsd2qw",
      id: "12q@1Was113333Ue3dd",
      text: "10시 기상33",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@1Was11as3333Ue3dd",
      text: "10시 기상111",
      checked: true,
      daily: false,
    },
    {
      pid: "hnmwdasdefsd2qw",
      id: "12q@1Was11fg3333Ue3dd",
      text: "11시 잠자222기",
      checked: true,
      daily: false,
    },
    {
      pid: "hnmwdasdefsd2qw",
      id: "12q@1Was1133ad33Ue3dd",
      text: "10시 기상4444",
      checked: true,
      daily: false,
    },
    //1206
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fghnmwasdefsdqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },

    //1205
    {
      pid: "hj12fghda123dqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },
    {
      pid: "hj12fghda123dqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },
    //1204
    {
      pid: "hjk2fasdghn1wefsdqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 강아지 산책",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk2fasdghn1wefsdqw",
      id: "12q@1Was1133dd33Ue3dd",
      text: "6시 기상",
      checked: true,
      daily: false,
    },
    //1203
    {
      pid: "hjk234fs22dnbnq111w",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fs22dnbnq111w",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상1",
      checked: true,
      daily: false,
    },
    {
      pid: "hjk234fs22dnbnq111w",
      id: "12q@1Was1133dd33Ue3dd",
      text: "10시 기상2",
      checked: true,
      daily: false,
    },
  ],
  is_login: false,
};

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default:
      return state;
  }
}
