import { component$ } from "@builder.io/qwik";
import Typography from "../typography";
import BackButton from "../back-button";

const ComingSoon = component$(() => {
  return (
    <div class="flex flex-col items-start w-full">
      <BackButton />
      <div class="flex flex-col items-center justify-center w-full">
        <Typography variant="h1">🚧</Typography>
        <Typography variant="h1">Coming soon</Typography>
      </div>
    </div>
  );
});

export default ComingSoon;
