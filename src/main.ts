import "./app.postcss";
import App from "./App.svelte";
import { inject } from '@vercel/analytics';

const app = new App({
  target: document.getElementById("app"),
});

inject();
export default app;
