<script>
	import "@dusk-network/styles/tailwind.css";
	import "./styles.css";
	import Logo from "@dusk-network/logo";
	import RichText from "@dusk-network/rich-text";
	import ProgressBar from "@dusk-network/progress-bar";

	export let generate_secret_key;

	const secretKey = generate_secret_key();

	let step = 1;
	let steps = 100;
  </script>
  
  <main>
	<Logo class="w-16" />
	<RichText>
		<strong>Your private key is being generated</strong>
	</RichText>
	<ProgressBar step="{step}" steps="{steps}" variant="brand" />
	<RichText>
		<p>your key is something... {secretKey}</p>
	</RichText>
  </main>

