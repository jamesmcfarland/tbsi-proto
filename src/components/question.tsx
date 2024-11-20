import { Button } from "./ui/button";

type Props = {
  question: Question;
  onAnswer: (answer: string) => void;
};
export type Question = {
  question: string;
  answers: string[];
  correctAnswer: string;
};

const QuestionComponent = ({ question, onAnswer }: Props) => {
  return (
    <div className="border p-4 rounded-md my-4 flex flex-col gap-2">
      <div>
        <h1 className=" font-bold">{question.question}</h1>
      </div>
      <div>
        <div className="grid grid-cols-2 gap-4">
          {question.answers.map((answer, index) => (
            <Button key={index} onClick={() => onAnswer(answer)} size="sm">
              {answer}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionComponent;
