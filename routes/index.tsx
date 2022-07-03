/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Text from "../islands/Text.tsx";

export default function Home() {
  return (
    <div class={tw`bg-gray-900 h-screen`}>
      <img
        src="/logo.svg"
        height="100px"
        alt="the fresh logo: a sliced lemon dripping with juice"
        class={tw`absolute p-6`}
      />
      <div class={tw`px-32 py-20 h-full`}>
        <h1 class={tw`text-2xl text-gray-300 py-6`}> Simple notes.</h1>
        <Text />
      </div>
    </div>
  );
}
