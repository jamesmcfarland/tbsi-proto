"use client";
import Image from "next/image";
import logo from "@/images/logo.jpg";
import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import Tracking from "@/components/tracking";
import { useRouter } from "next/navigation";

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

export default function Home() {
  const router = useRouter();
  const quizStreak = localStorageGet("quizStreak", 10);
  const cleanStreak = localStorageGet("cleanStreak", 5);

  return (
    <div className="p-4 h-screen w-full flex items-center justify-center flex-col">
      <div className="flex flex-shrink-0 w-full justify-center items-center flex-col">
        <div className="w-full flex justify-end">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
        <Image src={logo} alt="gateway logo" />
        <h1 className="uppercase tracking-widest text-4xl font-bold">
          gateway
        </h1>
      </div>
      <div className="flex flex-1 flex-col w-full gap-2 h-full justify-center items-center">
        <Button className="w-full" size="lg" asChild>
          <Link href="/quiz">
            <h1 className="font-bold ">Daily Quiz</h1>
          </Link>
        </Button>
        <Button className="w-full" variant="outline">
          <Link href="/settings">
            <h1>Settings</h1>
          </Link>
        </Button>
        <Button
          className="w-full"
          variant="destructive"
          onClick={() => {
            localStorage.setItem("quizStreak", "3");
            localStorage.setItem("cleanStreak", "4");
            router.refresh();
          }}
        >
          Reset Streaks
        </Button>
      </div>
      <div className="w-full flex-1 flex flex-col gap-2">
        <Tracking cleanStreak={cleanStreak} quizStreak={quizStreak} />
      </div>
    </div>
  );
}
