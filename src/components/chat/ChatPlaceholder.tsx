import React from "react";
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import GithubStar from "./../misc/GithubStar";

type Props = {};

export default function ChatPlaceholder({}: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">Tutor AI Playground</h1>
        <p className="mt-4 text-lg">
Tutor AI playground that allows you to switch between GPT 3.5 and GPT 4 and has the freedom to process any prompt
        </p>
        

        <div className="p-4">
          <GithubStar />
        </div>
      </div>
    </div>
  );
}
