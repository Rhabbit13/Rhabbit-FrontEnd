<<<<<<< HEAD
const getCookie = (name) => {
=======
// 브라우저에 있는 토큰을 가지고 올때
const getCookie = name => {
>>>>>>> 175c0369c19f11fc2df29f61e554ef5ed1b332d0
  let value = "; " + document.cookie;
  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};
<<<<<<< HEAD

const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/main`;
};

const deleteCookie = (name) => {
=======
// 토큰을 브라우저에 넣을때
const setCookie = (name, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};
// 토큰을 지울때
const deleteCookie = name => {
>>>>>>> 175c0369c19f11fc2df29f61e554ef5ed1b332d0
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };
