<script lang="ts">
  import Board from "./lib/Board.svelte";
  import SynthModule from "./lib/SynthModule.svelte";
  import ToneSwitch from "./lib/ToneSwitch.svelte";
</script>

<main>
  <h1>Hello Hack</h1>
  <div class="container">
    <ToneSwitch />
    <Board />
  </div>
  <SynthModule />
</main>

<style>
  :root {
    font-family: Avenir, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    color: #222;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }
  .container {
    display: flex;
    justify-content: center;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
