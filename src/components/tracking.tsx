import { Progress } from "./ui/progress";

type Props = {
  cleanStreak: number;
  quizStreak: number;
};

const Tracking = ({ cleanStreak, quizStreak }: Props) => {
  const max = 10;
  const cleanStreakScaled = (cleanStreak / max) * 100;
  const quizStreakScaled = (quizStreak / max) * 100;
  return (
    <>
      <div>
        <h2 className="font-bold tracking-tight">Clean streak</h2>
        <Progress value={cleanStreakScaled} indicatorClassName="bg-blue-400" />
      </div>
      <div>
        <h2 className="font-bold tracking-tight">Quiz streak</h2>
        <Progress value={quizStreakScaled} indicatorClassName="bg-red-400" />
      </div>
    </>
  );
};

export default Tracking;
