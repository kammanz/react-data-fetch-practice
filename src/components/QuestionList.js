import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from '@mui/material';
import data from '../data';

const questionStyles = {
  fontSize: '1.2rem',
  color: 'rgba(0, 0, 0, 0.87) !important;',
  fontFamily: 'Helvetica, Helvetica, Arial, sans-serif',
  fontWeight: 500,
  lineHeight: 1.7,
  marginBottom: 2,
  float: 'left',
};

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [value, setValue] = useState('');

  useEffect(() => {
    setQuestions(data);
  }, []);

  const ref = useRef();

  const scrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
    scrollTo(ref);
  };

  const handleNext = () => {
    setValue('');
    setQuestionIndex(questionIndex + 1);
  };

  const handlePrevious = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const renderQuestion = () => {
    let question = questions[questionIndex];

    return (
      <FormControl>
        <FormLabel id="hair-loss-group-label" sx={questionStyles}>
          {question.question}
        </FormLabel>
        <Divider
          sx={{
            borderStyle: 'dashed',
            borderColor: '#000639',
            marginBottom: 3,
          }}
        />
        <RadioGroup
          name="hair-loss-group"
          aria-labelledby="hair-loss-group-label"
          value={value}
          onChange={(e) => handleChange(e)}>
          {question.answers.map((answer) => {
            return (
              <Paper key={answer.id} sx={{ marginBottom: 2 }}>
                <FormControlLabel
                  sx={{ float: 'left', marginLeft: 2 }}
                  key={answer.id}
                  control={<Radio />}
                  label={answer.answer}
                  value={answer.answer}
                />
              </Paper>
            );
          })}
        </RadioGroup>
      </FormControl>
    );
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        maxWidth: '600px',
      }}>
      {questions.length > 0 ? renderQuestion() : 'loading...'}

      <Button
        sx={{ bgcolor: '#ff9800', display: 'block' }}
        variant="contained"
        type="button"
        ref={ref}
        disabled={
          !value || questionIndex === questions.length - 1 ? true : false
        }
        onClick={handleNext}>
        Next
      </Button>
      <Button
        sx={{ display: 'block', color: 'black !important' }}
        type="button"
        onClick={handlePrevious}
        disabled={questionIndex === 0}>
        Previous
      </Button>
    </Container>
  );
};

export default QuestionList;
