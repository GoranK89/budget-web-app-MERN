import { incomeActions } from "./income-slice";

export const fetchIncomeData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/income");

      if (!response.ok) {
        throw new Error("Could not fetch income data!");
      }

      const data = await response.json();

      return data;
    };

    try {
      const incomeData = await fetchData();
      dispatch(incomeActions.getIncome(incomeData));
    } catch (error) {
      // TODO: send error to an UI slice
      console.log("Fetching income data failed");
    }
  };
};

//TODO: recognize which user is logged in, incomes are assigned to the user
export const addIncomeData = (income) => {
  return async (dispatch) => {
    const sendRequest = async () => {
      const response = await fetch("http://localhost:8000/income", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: "6415af2d284d85c3c083f6ec",
          incomeType: income.incomeType,
          incomeAmount: income.incomeAmount,
        }),
      });

      console.log(income);

      if (!response.ok) {
        throw new Error("Server response error");
      }
    };

    try {
      await sendRequest();
      //NOTE: when new income is added, the incomes are fetched again
      dispatch(fetchIncomeData());
    } catch (error) {
      console.log(error);
    }
  };
};
