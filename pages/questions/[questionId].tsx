import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Question from '@utils/models/Question';
import { Container, Header, Main, Footer } from '@components';
import { QuestionDetail } from '@components/question-bank';

interface IQuestionProps {
  question: string;
  questions: any[];
}
const QuestionComponent = (props: IQuestionProps) => {
  const router = useRouter();
  const { questionId } = router.query;
  const [question, setQuestion] = useState<Question>();
  useEffect(() => {
    fetch(`/api/questions/${questionId}`)
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
      .then((ques: Question) => {
        setQuestion(ques);
      })
      .catch((error) => {
        setQuestion({});
        console.error('Error:', error);
      });
  }, [questionId]);

  return (
    <Container>
      <Header />
      <Main header={`${question?.questionType || ''} Question`} />
      <QuestionDetail question={question} />
      <Footer />
    </Container>
  );
};

QuestionComponent.propTypes = {};

export default QuestionComponent;
