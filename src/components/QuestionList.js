import React, { useState, useEffect } from 'react';
import data from '../data';

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    setQuestions(data);
  }, []);

  const handleChange = () => {
    console.log('handleChange fired');
    setIsSelected(true);
  };
  const handleNext = () => {
    console.log('handleClick fired');
    setQuestionIndex(questionIndex + 1);
  };

  const handlePrevious = () => {
    console.log('prev');
    setQuestionIndex(questionIndex - 1);
  };

  const renderQuestion = () => {
    return (
      <div>
        <div>{questions[questionIndex].question}</div>
        <div>
          {questions[questionIndex].answers.map((answer, i) => {
            return (
              <div>
                <label htmlFor={i}>{answer.answer}</label>
                <input
                  type="radio"
                  id={i}
                  checked={isSelected}
                  onChange={handleChange}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1>Question List</h1>
      <ul>{questions.length > 0 ? renderQuestion() : 'loading...'}</ul>
      <button type="button" onClick={handleNext}>
        Next
      </button>
      <button
        type="button"
        onClick={handlePrevious}
        disabled={questionIndex === 0 ? true : false}>
        Previous
      </button>
    </div>
  );
};

export default QuestionList;
