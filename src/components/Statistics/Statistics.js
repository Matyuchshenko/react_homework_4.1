// import PropTypes from 'prop-types'
import Notification from "../Notification";

const Statistics = ({ good, neutral, bad, total, PositivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bed: {bad}</li>
          <li>Total: {total}</li>
          <li>Positive Percentage: {PositivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given" />}
    </>
  );
};

export default Statistics;
