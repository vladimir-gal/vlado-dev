import { Slot, component$ } from "@builder.io/qwik";
import { Link as QLink } from "@builder.io/qwik-city";

type Props = {
  class?: string;
  href: string;
};

const Link = component$<Props>((props) => {
  return (
    <QLink
      class={`flex flex-col mt-4 font-bold text-md underline hover:cursor-pointer ${props.class}`}
      href={props.href}
    >
      <Slot />
    </QLink>
  );
});

export default Link;
