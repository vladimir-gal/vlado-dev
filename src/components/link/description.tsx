import { Slot, component$ } from "@builder.io/qwik";

const LinkDescription = component$(() => {
  return (
    <span class="mt-2 font-normal text-sm no-underline">
      <Slot />
    </span>
  );
});

export default LinkDescription;
