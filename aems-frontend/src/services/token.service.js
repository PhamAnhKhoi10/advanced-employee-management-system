export const sessionKey = "session";
export const rememberMeKey = "rememberMe";
export const getToken = () => {
  try {
    const session = localStorage.getItem(sessionKey);
    if (session === null) {
      return null;
    }
    return JSON.parse(session).accessToken;
  } catch (error) {
    console.error("Invalid Token. Redirecting to /login");
    // setTimeout(doLogout, 300);
    return null;
  }
};

export const getPermissions = () => {
  try {
    const session = localStorage.getItem(sessionKey);
    if (session === null) {
      return [];
    }
    return JSON.parse(session).permissions;
  } catch (error) {
    console.error("Invalid Token. Redirecting to /login");
    // setTimeout(doLogout, 300);
    return [];
  }
};

export const setSession = (newSession) => {
  localStorage.setItem(sessionKey, JSON.stringify(newSession));
};

export const getSession = () => {
  const session = localStorage.getItem(sessionKey);
  if (session) {
    return JSON.parse(session);
  }
  return null;
};

export const deleteItem = (key) => {
  localStorage.removeItem(key);
};

export const setRememberMe = (rememberMe) => {
  localStorage.setItem(rememberMeKey, JSON.stringify(rememberMe));
};

export const getRememberMe = () => {
  const rememberMe = localStorage.getItem(rememberMeKey);
  if (rememberMe) {
    return JSON.parse(rememberMe);
  }
  return null;
};

const TokenService = {
  getToken,
  getPermissions,
  setSession,
  getSession,
  deleteItem,
  setRememberMe,
  getRememberMe,
};
export default TokenService;
