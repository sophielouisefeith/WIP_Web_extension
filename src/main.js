import App from './App.svelte';
// FIXME these imports need to come from the installed dusk-browser-extension-library package.
import init, { generate_secret_key } from "../pkg/utils.js";
import path from "../pkg/utils_bg.wasm";

const app = (async () => {
  await init(path)
  const app = new App({
    target: document.getElementById("dusk"),
    props: {
		generate_secret_key,
    }
  })
})();

export default app;