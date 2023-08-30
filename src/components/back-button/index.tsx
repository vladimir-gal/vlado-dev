import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LucideArrowLeft } from "../icons/arrow-left";

type Props = {
  href?: string;
};

const BackButton = component$<Props>(({ href = "/" }) => {
  return (
    <Link href={href}>
      <LucideArrowLeft class="text-xl" />
    </Link>
  );
});

export default BackButton;
