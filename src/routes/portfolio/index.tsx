import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import ComingSoon from "~/components/coming-soon";

export default component$(() => {
  return <ComingSoon />;
});

export const head: DocumentHead = {
  title: "vlado.dev | Portfolio",
  meta: [
    {
      name: "description",
      content: "About me site",
    },
  ],
};
