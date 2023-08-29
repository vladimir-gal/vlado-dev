import { Slot, component$ } from "@builder.io/qwik";

const MainFrame = component$(() => {
  const styles = `m-8 border border-zinc-600 p-4 rounded-md w-full md:w-1/3`;

  return (
    <main class="flex flex-row justify-center">
      <section class={styles}>
        <Slot />
      </section>
    </main>
  );
});

export default MainFrame;
