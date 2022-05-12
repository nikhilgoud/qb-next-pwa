import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Question from '@utils/models/Question';
import { Container, Header, Main, Footer } from '@components';
import { QuestionsList } from '@components/question-bank';

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch(`/api/questions`)
      .then((response) => {
        if (!response.ok) {
          // create error object and reject if not a 2xx response code
          const err = new Error('HTTP status code: ' + response.status);
          // err.response = response;
          // err.status = response.status;
          throw err;
        }
        return response.json();
      })
      .then((ques: Question[]) => {
        setQuestions(ques);
      })
      .catch((error) => {
        setQuestions([]);
        console.error('Error:', error);
      });
  }, []);

  return (
    <Container>
      <Header />
      <Main header={`All Questions`} />
      <QuestionsList questions={questions} />
      <Footer />
    </Container>
  );
};

export default Questions;
