import React from 'react';
import PropTypes from 'prop-types';

const Answer = (props) => {
  return (
    <li className="answerOption">
      <input
        type="radio"
        className="radioCustomButton"
        name="answerOption"
        id={props.feedback}
        value={props.feedback}
        checked={props.selectedAnswer === props.feedback}
        disabled={props.isDisabled}
        onChange={props.onAnswerSelected}
      />
      <label htmlFor={props.feedback} className="radioCustomLabel">
        {props.answer}
      </label>
    </li>
  );
}

Answer.propTypes = {
  answer: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired,
  selectedAnswer: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

export default Answer;
