import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LucideArrowLeft } from "../icons/arrow-left";

const BackButton = component$(() => {
  return (
    <Link href="/">
      <LucideArrowLeft class="text-xl" />
    </Link>
  );
});

export default BackButton;
