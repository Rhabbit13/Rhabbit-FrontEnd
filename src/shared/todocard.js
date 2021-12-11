import instance from "./instance";

export function PostAddTodoList(Id, Data) {
  return instance({
    method: "POST",
    url: `/api/${Id}/detail/todolist`,
    data: Data,
  });
}
export function PutFixTodoList(cardId, Data) {
  return instance({
    method: "PUT",
    url: `/api/${cardId}/detail/update`,
    data: Data,
  });
}
export function DelectTodoList(cardId, textId) {
  return instance({
    method: "DELETE",
    url: `/api/${cardId}/detail/delete/${textId}`,
  });
}
export function LoadCardList() {
  return instance({
    method: "GET",
    url: `/api/cards/`,
  });
}

export function AddCardList(cardsId) {
  return instance({
    method: "POST",
    url: `/api/cards/${cardsId}`,
  });
}
