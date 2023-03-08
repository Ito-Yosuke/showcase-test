import type { Component } from "solid-js";
import { createSignal, createEffect, onMount } from "solid-js";

import { useAnimation } from "../animation";

const CounterPage: Component = () => {
  const [count, setCount] = createSignal(0);
  createEffect(() => {
    console.log("count is", count());
  });

  onMount(() => {
    console.log("on mount", count());
    var el = document.querySelector(".square")
    el && useAnimation().bubble(el);
  });

  return (
    <>
      <div>{count()}</div>
      <button onClick={
        () => {
          setCount((c) => c + 1)
          var el = document.querySelector(".square")
          el && useAnimation().changeColor(el, count())
        }}>increment</button>
      <div class='nav'>
        <div class="square"/>
      </div>
    </>
  );
};

export default CounterPage;
