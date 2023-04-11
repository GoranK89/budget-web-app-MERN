import { loginActions } from "./login-slice";

export const authorizeLogin = (email, password) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:8000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(responseData.message);
    }
    dispatch(
      loginActions.loginSuccess({
        token: responseData.token,
        userId: responseData._id,
      })
    );
  };
};
