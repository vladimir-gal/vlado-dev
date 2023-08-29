import { component$, Slot } from "@builder.io/qwik";
import MainFrame from "~/components/main-frame";

export default component$(() => {
  return (
    <MainFrame>
      <Slot />
    </MainFrame>
  );
});
