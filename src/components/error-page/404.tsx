import { component$ } from "@builder.io/qwik";
import BackButton from "../back-button";
import Typography from "../typography";

const ErrorPage404 = component$(() => {
  return (
    <div class="flex flex-col items-start justify-center w-full">
      <BackButton href="/blog" />{" "}
      <div class="flex flex-col items-center justify-center w-full">
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Page not found</Typography>
      </div>
    </div>
  );
});

export default ErrorPage404;
