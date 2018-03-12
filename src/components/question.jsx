import React from 'react';
import PropTypes from 'prop-types';

const Question = (props) => {
  return (
    <div className="question-wrapper">
      <h2 className="question">{props.question}</h2>
      <img src={props.imgUrl} alt={props.question} />
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
};

export default Question;
