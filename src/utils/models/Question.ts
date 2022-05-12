import QuestionType from './QuestionType';

type Question = {
  id: string;
  name: string;
  description: string;
  questionType: QuestionType;
  questionCode: string;
  questionData: any;
  answer: string;
  answerCode: string;
  answerData: any;
  answerVisible: boolean;
  testcases: string[];
  tags: string[];
};
export default Question;
