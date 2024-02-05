import { createRoot } from "svelte";
import "./app.css";
import App from "./App.svelte";

const app = createRoot(App, {
  target: document.getElementById("app") as HTMLElement,
});

export default app;
