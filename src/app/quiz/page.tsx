"use client";
import QuestionComponent, { Question } from "@/components/question";
import Tracking from "@/components/tracking";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const questions: Question[] = [
  {
    question: "What is the street name for cannabis?",
    answers: ["Weed", "Coke", "Ket", "Candy"],
    correctAnswer: "Weed",
  },
  {
    question: "What is the leading cause of lung cancer?",
    answers: ["Cigarettes", "TV", "Hiking", "Inhalers"],
    correctAnswer: "Cigarettes",
  },
];

const useQuestion: Question = {
  question: "Have you used today?",
  answers: ["Yes", "No"],
  correctAnswer: "No",
};

const lostStreakQuestion: Question = {
  question: "Day 1 - Let's go",
  answers: ["Yes!!"],
  correctAnswer: "Yes!!",
};

const cleanQuestion: Question = {
  question: "Another day on the streak, well done!",
  answers: ["I'm doing great!"],
  correctAnswer: "I'm doing great!",
};

const localStorageGet = (key: string, defaultValue: number) => {
  if (typeof window === "undefined") {
    return defaultValue;
  }
  const value = localStorage.getItem(key);
  if (value) {
    return parseInt(value);
  }
  return defaultValue;
};

const Page = () => {
  const router = useRouter();
  // Pick a random question
  const question = questions[Math.floor(Math.random() * questions.length)];
  const [api, setApi] = useState<CarouselApi>();
  const [quizStreak, setquizStreak] = useState(
    localStorageGet("quizStreak", 10)
  );
  const [cleanStreak, setcleanStreak] = useState(
    localStorageGet("cleanStreak", 5)
  );

  const onAnswer = (answer: string) => {
    if (answer === question.correctAnswer) {
      toast.success("Well done!");
      setquizStreak((prev) => prev + 1);
      localStorage.setItem("quizStreak", quizStreak + 1 + "");
      api?.scrollTo(1);
    } else {
      toast.error("Incorrect answer, try again!");
    }
  };
  const onUseAnswer = (answer: string) => {
    if (answer === useQuestion.correctAnswer) {
      toast.success("Well done!");
      setcleanStreak((prev) => prev + 1);
      localStorage.setItem("cleanStreak", cleanStreak + 1 + "");
      api?.scrollTo(3);
    } else {
      toast("No worries!");
      setcleanStreak(0);
      localStorage.setItem("cleanStreak", "0");
      api?.scrollTo(2);
    }
  };
  const onFinalAnswer = () => {
    toast.success("Awesome!");
    router.push("/");
  };

  return (
    <div className="p-4 h-screen w-screen  flex items-center justify-center flex-col">
      <div className="w-full flex-1 flex justify-end">
        <Avatar>
          <AvatarImage src="/avatar.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex flex-1s justify-center items-center">
        <Carousel setApi={setApi} opts={{ watchDrag: false }}>
          <CarouselContent>
            <CarouselItem>
              <QuestionComponent question={question} onAnswer={onAnswer} />
            </CarouselItem>
            <CarouselItem>
              <QuestionComponent
                question={useQuestion}
                onAnswer={onUseAnswer}
              />
            </CarouselItem>
            <CarouselItem>
              <QuestionComponent
                question={lostStreakQuestion}
                onAnswer={onFinalAnswer}
              />
            </CarouselItem>
            <CarouselItem>
              <QuestionComponent
                question={cleanQuestion}
                onAnswer={onFinalAnswer}
              />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>

      <div className=" flex flex-1 flex-col gap-2 w-full">
        <Tracking cleanStreak={cleanStreak} quizStreak={quizStreak} />
      </div>
    </div>
  );
};

export default Page;
