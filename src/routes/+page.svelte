<script>
    import Doc from './doc.svx';
    export let data;
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<p>Add content to <code>./doc.svx</code> before or after the <code>blockquote</code>, and it will crash.</p>

<Doc />

<p><code>mdsvex.compile</code> seems to work. Not as a svelte pre-processor, but used directly. :shrug: <a href="https://mdsvex.pngwn.io/docs#compile" target="_blank">(docs)</a></p>

{@html data.code}
