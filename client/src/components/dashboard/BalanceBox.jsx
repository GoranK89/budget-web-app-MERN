import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBalance,
  createBalance,
  updateBalance,
} from "../../store/balance-actions";

const BalanceBox = () => {
  const dispatch = useDispatch();
  const balance = useSelector((state) => state.balance.balance);
  const user = useSelector((state) => state.login.userId);
  const [updatingBalance, setUpdatingBalance] = useState(false);
  const [addingBalance, setAddingBalance] = useState(false);
  const [balanceInput, setBalanceInput] = useState("");

  useEffect(() => {
    dispatch(fetchBalance(user));
  }, [balance]);

  const addBalanceHandler = () => {
    dispatch(createBalance(user, balanceInput));
    setAddingBalance(false);
  };

  const updateBalanceHandler = () => {
    dispatch(updateBalance(user, balanceInput));
    setUpdatingBalance(false);
  };

  // button switching state handlers
  const updatingBalanceState = () => {
    setUpdatingBalance(!updatingBalance);
  };
  const addingBalanceState = () => {
    setAddingBalance(!addingBalance);
  };

  const BalanceButton = () => {
    if (balance !== null && !updatingBalance) {
      return <button onClick={updatingBalanceState}>Update Balance</button>;
    } else if (balance !== null && updatingBalance) {
      return <button onClick={updateBalanceHandler}>Submit</button>;
    } else if (balance === null && addingBalance) {
      return <button onClick={addBalanceHandler}>Submit</button>;
    } else if (balance === null && !addingBalance) {
      return <button onClick={addingBalanceState}>Add Balance</button>;
    }
  };

  const balanceInputHandler = (event) => {
    setBalanceInput(event.target.value);
  };

  const BalanceField =
    !updatingBalance && !addingBalance ? (
      <span>€{balance || 0}</span>
    ) : (
      <input
        placeholder="New balance"
        onChange={balanceInputHandler}
        type="number"
      />
    );

  return (
    <div className="balance-box">
      {BalanceField}
      <p>Current balance</p>
      {BalanceButton()}
    </div>
  );
};

export default BalanceBox;
