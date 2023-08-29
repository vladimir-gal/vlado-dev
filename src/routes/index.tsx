import { component$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Link from "~/components/link";
import LinkDescription from "~/components/link/description";
import Typography from "~/components/typography";
import Footer from "~/components/footer";

const PARAGRAPHS = [
  "I'm a software engineer from Slovakia. I'm passionate about building tools and web applications that help people and businesses around the world.",
  "I enjoy working with TypeScript, Node.js and React. I'm also a big fan of Bun.sh, Qwik and shadcn/ui.",
  <>
    Currently I am working only as a contractor. If you are interested in
    working with me, please reach out to me at{" "}
    <a class="underline font-bold" href="mailto:vladimirgal1210@gmail.com">
      vladimirgal1210@gmail.com
    </a>
    .
  </>,
  "This site is supposed to be minimalistic to give you the information you need without any distractions. It is built with Qwik and Tailwind CSS.",
];

export default component$(() => {
  return (
    <>
      <Typography variant="h1">👋 Hi, I'm Vlad</Typography>
      <div class="flex flex-col mt-4">
        {PARAGRAPHS.map((paragraph, index) => (
          <Typography key={index} variant="p" class="mt-2">
            {paragraph}
          </Typography>
        ))}
      </div>
      <div class="flex flex-col mt-4">
        <h2 class="text-xl font-bold">Quick links:</h2>
        <Link href="/blog">Blog</Link>
        <LinkDescription>
          My blog where I write about web development and other things.
        </LinkDescription>
        <Link href="/resume">Resume</Link>
        <LinkDescription>
          My resume where you can find more information about me.
        </LinkDescription>
        <Link href="/portfolio">Portfolio</Link>
        <LinkDescription>
          My portfolio where you can find projects I have worked on.
        </LinkDescription>
        <Link href="/skills">Skills</Link>
        <LinkDescription>
          My skills where you can find technologies I have worked with.
        </LinkDescription>
      </div>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "vlado.dev",
  meta: [
    {
      name: "description",
      content: "About me site",
    },
  ],
};
