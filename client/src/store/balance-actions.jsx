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

export const createBalance = (user, balance) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/balance`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, balance }),
      });

      const data = await response.json();
      return data;
    };

    try {
      const balance = await fetchData();
      dispatch(balanceActions.setBalance(balance.balance));
    } catch (err) {
      // TODO: send error to an UI slice
      console.log("Creating balance failed");
    }
  };
};

export const updateBalance = (user, newBalance) => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8000/balance`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, balance: newBalance }),
      });

      const data = await response.json();
      return data;
    };

    try {
      const update = await fetchData();
      dispatch(balanceActions.setBalance(update.balance));
    } catch (err) {
      // TODO: send error to an UI slice
      console.log("Updating balance failed");
    }
  };
};
