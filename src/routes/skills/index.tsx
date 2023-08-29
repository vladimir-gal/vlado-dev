import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import BackButton from "~/components/back-button";
import Typography from "~/components/typography";
import Footer from "~/components/footer";

export default component$(() => {
  return (
    <div class="flex flex-col">
      <BackButton />
      <Typography variant="h1" class="mt-4">
        Skills
      </Typography>
      <Typography variant="p" class="mt-4">
        I could list all of my skills here, but I think the best way to
        demonstrate my skills is to briefly describe my experience.
      </Typography>
      <Typography variant="p" class="mt-4">
        I have been working in the IT industry for 5 years now. I started as a
        junior developer at a small company in Slovakia. On my first project I
        got to work mainly with Node.js on the backend. I got introduced to
        TypeScript, AWS and Serverless technologies.
      </Typography>
      <Typography variant="p" class="mt-4">
        As I advanced in my career, I got to work on more projects and with more
        technologies. I worked with React, Next.js, GraphQL, PostgreSQL, Docker
        and many more.
      </Typography>
      <Typography variant="p" class="mt-4">
        I have also worked with many different companies and clients. I worked
        with startups, small companies and big companies. I worked with clients
        from all over the world.
      </Typography>
      <Typography variant="p" class="mt-4">
        Recently, I started contributing to open source. I am currently working
        on a CLI tool called dhCLI. It is a tool that helps developers make
        their life easier. It is built with TypeScript and Bun.sh.
      </Typography>
      <Typography variant="p" class="mt-4">
        If you want to learn more about my experience, please reach out to me on
        any of the social media listed in the footer.
      </Typography>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "vlado.dev | Skills",
  meta: [
    {
      name: "description",
      content: "About me site",
    },
  ],
};
