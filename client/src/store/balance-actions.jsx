import { balanceActions } from "./balance-slice";

export const fetchBalance = (user) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/balance/${user}`);

      if (!response.ok) {
        throw new Error("Could not fetch balance data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const balanceData = await fetchData();
      dispatch(balanceActions.setBalance(balanceData.balance));
    } catch (error) {
      // TODO: send error to an UI slice
      console.log("Fetching balance data failed");
    }
  };
};
