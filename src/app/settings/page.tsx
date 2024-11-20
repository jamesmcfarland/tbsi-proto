"use client";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function SettingsPage() {
  const [positiveEffects, setPositiveEffects] = useState(false);
  const [judgmentalLanguage, setJudgmentalLanguage] = useState(false);
  const [positiveOutcome, setPositiveOutcome] = useState(false);
  const [name, setName] = useState("Kamil Biegaj");

  return (
    <div className="p-4">
      <div className="flex flex-shrink-0 flex-col">
        <h1 className="text-xl font-bold mb-4">
          Content Sensitivity Preferences
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          We know some content can be distressing to our users, adjust your
          settings below:
        </p>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Hide any information which states any positive effects substances
              can have:
            </span>
            <Switch
              checked={positiveEffects}
              onCheckedChange={setPositiveEffects}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Avoid judgmental language:
            </span>
            <Switch
              checked={judgmentalLanguage}
              onCheckedChange={setJudgmentalLanguage}
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">
              Focus on achieving a positive outcome:
            </span>
            <Switch
              checked={positiveOutcome}
              onCheckedChange={setPositiveOutcome}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center gap-2 ">
          <Avatar>
            <AvatarImage src="/avatar.jpg" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <label className="text-sm font-medium block mb-2" htmlFor="name">
              Your name:
            </label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex mt-4">
          <Button className="w-full" variant="default" asChild>
            <Link href="/">
              <h1>Save</h1>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
