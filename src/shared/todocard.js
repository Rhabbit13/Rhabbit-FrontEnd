import instance from "./instance";

export function PostAddTodoList(Id, Data) {
  return instance({
    method: "POST",
    url: `/api/${Id}/detail/todolist`,
    data: Data,
  });
}
export function PutFixTodoList(Id, Data) {
  return instance({
    method: "PUT",
    url: `/api/${Id}/detail/update`,
    data: Data,
  });
}
export function DelectTodoList(cardId, textId) {
  return instance({
    method: "DELECT",
    url: `/api/${cardId}/detail/delete`,
    data: textId,
  });
}
export function LoadCardList() {
  return instance({
    method: "GET",
    url: `/api/cards/`,
  });
}

export function AddCardList(data) {
  return instance({
    method: "POST",
    url: "/api/cards",
    data: data,
  });
}
