import React from 'react';
import Question from '@utils/models/Question';
import Link from 'next/link';

export const QuestionsList: React.FC<{ questions: Question[] }> = ({ questions }) => {
  return (
    <div className="grid text-black dark:text-white">
      {questions.length ? (
        questions.map((question: Question) => (
          <div key={question.name} className={'card row rounded-md border border-gray-300 p-5 m-5'}>
            <Link href="/questions/[questionId]" as={`/questions/${question.id}`}>
              <a>
                <h3 className="text-xl font-semibold mb-2">{question.name} &rarr;</h3>
                <p className="m-0">{question.description}</p>
              </a>
            </Link>
            <div className={'flex'}>
              {question.tags.map((tag: string) => (
                <Link key={tag} href="/skill/[id]" as={`/skill/${tag}`}>
                  <div className={'column'}>
                    <p className="m-0">#{tag} &nbsp;</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className={'card row rounded-md border border-gray-300 p-5 m-5'}>
          <h3 className="text-xl font-semibold mb-2">Not Yet Added! &rarr;</h3>
          <p className="m-0">Please come back after some time!</p>
        </div>
      )}
    </div>
  );
};
