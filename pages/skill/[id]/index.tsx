import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Question from '@utils/models/Question';
import { Container, Header, Landing, Main, Footer } from '@components';
import { QuestionsList } from '@components/question-bank';

interface ISkillProps {
  skill: string;
  questions: any[];
}

const Skill = (props: ISkillProps) => {
  const router = useRouter();
  const { id } = router.query;
  const [questions, setQuestions] = useState<Question[]>([]);
  useEffect(() => {
    fetch(`/api/skills/${id}`)
      .then((response) => {
        if (!response.ok) {
          // create error object and reject if not a 2xx response code
          throw new Error('HTTP status code: ' + response.status);
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
  }, [id]);

  return (
    <Container>
      <Header />
      <Main header={`${id || props.skill} Questions`} />
      <QuestionsList questions={questions} />
      <Footer />
    </Container>
  );
};

Skill.propTypes = {};

export default Skill;
