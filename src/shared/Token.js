const getToken = () => {
  const token = window.localStorage.getItem("token");
  const realToken = token.replace(/\"/gi, "");
   return realToken;
};

export default getToken;
