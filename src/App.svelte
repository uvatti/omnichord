<script lang="ts">
  import Board from "./lib/Board.svelte";
  import SynthModule from "./lib/SynthModule.svelte";
  import ToneSwitch from "./lib/ToneSwitch.svelte";
</script>

<main>
  <h1>Omnichord</h1>
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
    color: #061d42;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  h1 {
    color: #04a8bc;
    text-transform: uppercase;
    font-size: 2rem;
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
