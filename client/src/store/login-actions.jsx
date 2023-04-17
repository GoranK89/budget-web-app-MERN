import { loginActions } from "./login-slice";

export const authorizeLogin = (email, password) => {
  return async (dispatch) => {
    const loginRequest = async () => {
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

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      return data;
    };

    try {
      const responseData = await loginRequest();
      dispatch(
        loginActions.loginSuccess({
          token: responseData.token,
          userId: responseData._id,
        })
      );
    } catch (err) {
      console.log(err);
    }
  };
};
