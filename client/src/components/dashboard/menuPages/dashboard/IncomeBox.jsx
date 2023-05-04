import { fetchIncomeData } from "../../../../store/income-actions";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const IncomeBox = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.login.userId);
  const income = useSelector((state) => state.income);

  const [timeFrame, setTimeFrame] = useState("thisMonth");

  const getTimeFrameDates = (timeFrame) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();

    const timeFrames = {
      thisMonth: { startDate: new Date(year, month, 1), endDate: now },
      lastMonth: {
        startDate: new Date(year, month - 1, 1),
        endDate: new Date(year, month, 0),
      },
      last3Months: {
        startDate: new Date(year, month - 3, 1),
        endDate: now,
      },
      last6Months: {
        startDate: new Date(year, month - 6, 1),
        endDate: now,
      },
      thisYear: {
        startDate: new Date(year, month - month, 1),
        endDate: now,
      },
      lastYear: {
        startDate: new Date(year - 1, month, 1),
        endDate: new Date(year, month - month, 1),
      },
    };

    const selectedTimeFrame = timeFrames[timeFrame];

    return selectedTimeFrame
      ? selectedTimeFrame
      : { startDate: null, endDate: null };
  };

  const { startDate, endDate } = getTimeFrameDates(timeFrame);

  const filteredIncome = income.filter((item) => {
    const itemDate = new Date(item.createdAt);
    return itemDate >= startDate && itemDate <= endDate;
  });

  const totalIncome = filteredIncome.reduce(
    (total, income) => total + income.incomeAmount,
    0
  );

  useEffect(() => {
    dispatch(fetchIncomeData(user));
  }, [dispatch, user]);

  return (
    <div className="income-box">
      <h2>Income</h2>
      <div className="card-details">
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
        >
          <option value="thisMonth">This month</option>
          <option value="lastMonth">Last month</option>
          <option value="last3Months">Last 3 months</option>
          <option value="last6Months">Last 6 months</option>
          <option value="thisYear">This year</option>
          <option value="lastYear">Last year</option>
        </select>
        <span>€{totalIncome}</span>
        <p>+2% Since last month</p>
      </div>
    </div>
  );
};

export default IncomeBox;
