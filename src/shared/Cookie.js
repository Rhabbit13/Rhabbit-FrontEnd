// 브라우저에 있는 토큰을 가지고 올때
const getCookie = (name) => {
  let value = "; " + document.cookie;

  let parts = value.split("; " + name + "=");
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

// 토큰을 브라우저에 넣을때
const setCookie = (Authorization, value, exp = 5) => {
  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  document.cookie = `${Authorization}=${value};expires=${date.toUTCString()};path=/`;
 
};
// 토큰을 지울때
const deleteCookie = (name) => {
  document.cookie = name + "=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
};

export { getCookie, setCookie, deleteCookie };
