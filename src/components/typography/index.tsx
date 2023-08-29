import { Slot, component$ } from "@builder.io/qwik";
import type { VariantProps } from "tailwind-variants";
import { tv } from "tailwind-variants";

const typography = tv({
  base: "text-zinc-50",
  variants: {
    variant: {
      h1: "text-2xl font-bold",
      h2: "text-xl font-bold",
      p: "text-justify",
    },
    margin: {
      mt: "mt-4",
      mb: "mb-4",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type Props = {
  class?: string;
  variant: VariantProps<typeof typography>["variant"];
};

const Typography = component$<Props>((props) => {
  return (
    <span
      class={typography({
        variant: props.variant,
        class: props.class,
      })}
    >
      <Slot />
    </span>
  );
});

export default Typography;
