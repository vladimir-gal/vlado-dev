import { component$ } from "@builder.io/qwik";
import { LucideTwitter } from "../icons/twitter";
import { LucideGithub } from "../icons/github";
import { LucideLinkedin } from "../icons/linked-in";

const Footer = component$(() => {
  return (
    <div class="flex flex-row justify-end mt-4">
      <a
        href="https://twitter.com/MrDreix_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LucideTwitter class="text-xl" />
      </a>
      <a
        href="https://github.com/vladimir-gal"
        target="_blank"
        rel="noopener noreferrer"
        class="mx-4"
      >
        <LucideGithub class="text-xl" />
      </a>
      <a
        href="https://sk.linkedin.com/in/vladim%C3%ADr-g%C3%A1l-91a131106"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LucideLinkedin class="text-xl" />
      </a>
    </div>
  );
});

export default Footer;
