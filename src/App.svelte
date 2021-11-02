<script>
	import "./styles.css";
	import browser from "webextension-polyfill";
	import Logo from "@dusk-network/logo";
	import Heading from "@dusk-network/heading";
	import ProgressBar from "@dusk-network/progress-bar";
  
	let step = 1;
	let steps = 100;
  </script>
  
  <main>
	<Logo class="extension-logo" />
	<Heading>Your private key is being generated</Heading>
	<ProgressBar step="{step}" steps="{steps}" variant="brand" />
  </main>

  <style>
	  :global(.extension-logo > svg) {
		  @apply w-96;
	  }
  </style>

