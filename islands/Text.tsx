/** @jsx h */
import { h, createRef } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CounterProps {
  start: number;
}

export default function Text() {
  const initText = localStorage.getItem("fresh_text")
    ? localStorage.getItem("fresh_text")
    : "";
  const [text, setText] = useState(initText);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    localStorage.setItem("fresh_text", text);
  }, [text]);

  const ref = createRef();
  useEffect(() => {
    ref.current.focus();
  });
  return (
    <textarea
      contentEditable
      class={tw`bg-gray-900 text-gray-100 text-xl outline-none h-full w-full resize-none`}
      onKeyDown={(e) => {
        handleTextChange(e);
      }}
      ref={ref}
      placeholder={'Just Write...'}
    >
      {text}
    </textarea>
  );
}
