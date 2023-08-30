import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead, Link } from "@builder.io/qwik-city";
import dayjs from "dayjs";
import BackButton from "~/components/back-button";
import Footer from "~/components/footer";
import Typography from "~/components/typography";
import client from "~/supabase/client";

export const usePosts = routeLoader$(async (event) => {
  const sb = client(event);

  const { data, error } = await sb
    .from("posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { error, data: null };
  }

  return { data, error: null };
});

export default component$(() => {
  const posts = usePosts();

  return (
    <>
      <BackButton />
      <div class="w-full mt-4 flex flex-col">
        {posts.value.data?.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            class="flex flex-row justify-between items-center border-b border-zinc-600"
          >
            <Typography variant="h2">{post.title}</Typography>
            <Typography variant="p">
              {dayjs(post.created_at).format("DD.MM.YYYY")}
            </Typography>
          </Link>
        ))}
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
