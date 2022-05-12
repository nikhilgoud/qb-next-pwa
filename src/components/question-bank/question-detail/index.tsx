import React from 'react';
import Question from '@utils/models/Question';

export const QuestionDetail: React.FC<{ question: Question }> = ({ question }) => {
  return (
    <div className={`flex-1 container my-8 max-w-screen-lg mx-auto`}>
      <div className={'grid rounded-md border border-gray p-5'}>
        <div className={'card row'}>
          {question?.name}
          <p className={'description'}>{question?.description}</p>
        </div>
        {question?.questionCode && (
          <div className={'card row'}>
            {question?.questionCode && <code className={'card row'}>{question.questionCode}</code>}
          </div>
        )}
        {question?.questionData && (
          <div className={'card row'}>
            {question?.questionData && <pre className={'card row'}>{question.questionData}</pre>}
          </div>
        )}
        {question?.answerVisible && (
          <div className={'card row'}>
            {question?.answerCode && <code className={'card row'}>{question.answerCode}</code>}
            {question?.answer && <div>{question.answer}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
