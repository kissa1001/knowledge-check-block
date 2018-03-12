import React from 'react';
import PropTypes from 'prop-types';
import correct from '../img/correct.svg';
import wrong from '../img/wrong.svg';

const Result = (props) => {
  return (
      <div className="result-wrapper">
        <div className="isCorrect-wrapper">
          <img src={props.isCorrect[0] ? correct : wrong} alt='isCorrect img' />
        </div>
        <h3>{props.feedback}</h3>
        <button className="btn-blue" onClick={props.onReset}>Reset</button>
      </div>
  );
}

Result.propTypes = {
  feedback: PropTypes.string.isRequired,
  onReset: PropTypes.func.isRequired
};

export default Result;
