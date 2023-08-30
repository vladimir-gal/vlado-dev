import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { RendererObject } from "marked";
import { marked } from "marked";
import BackButton from "~/components/back-button";
import ErrorPage404 from "~/components/error-page/404";
import Typography from "~/components/typography";
import client from "~/supabase/client";
import Footer from "~/components/footer";

export const usePost = routeLoader$(async (event) => {
  const sb = client(event);

  const { data, error } = await sb
    .from("posts")
    .select("*")
    .eq("id", event.params.id)
    .single();

  if (error) {
    return { error, data: null };
  }

  return { data, error: null };
});

export default component$(() => {
  const post = usePost();

  if (post.value.error) {
    return <ErrorPage404 />;
  }

  const renderer: RendererObject = {
    heading(text, level) {
      const styles = {
        1: "text-2xl font-bold",
        2: "text-xl font-bold",
        3: "text-lg font-bold",
        4: "text-base font-bold",
      }[level];
      return `<h${level} class="my-4 ${styles}">${text}</h${level}>`;
    },
    code(code) {
      return `<pre class="bg-gray-900 text-white p-4 rounded-md my-2">${code}</pre>`;
    },
    list(body) {
      return `<ul class="list-disc list-inside">${body}</ul>`;
    },
  };

  marked.use({ renderer });

  const parsedMarkdown = marked.parse(post.value.data.content);

  return (
    <>
      <BackButton href="/blog" />
      <div class="w-full mt-4">
        <Typography variant="h2" class="mt-4">
          {post.value.data.title}
        </Typography>
        <div dangerouslySetInnerHTML={parsedMarkdown} class="mt-4" />
      </div>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "vlado.dev | Blog",
  meta: [
    {
      name: "description",
      content: "About me site",
    },
  ],
};
