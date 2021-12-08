<script lang="ts">
  import Icon from "@iconify/svelte";
  import { oscillators, soundSettings, OscillatorType } from "./store";
  const toneSelected = (tone: OscillatorType) =>
    soundSettings.setOscillator(tone);
  console.log($soundSettings.oscillator);
</script>

<div class="container">
  <div
    class="type"
    class:selected={$soundSettings.oscillator === oscillators.sine}
    on:click={() => toneSelected(oscillators.sine)}
  >
    <Icon icon="mdi:sine-wave" />
  </div>
  <div
    class="type"
    class:selected={$soundSettings.oscillator === oscillators.triangle}
    on:click={() => toneSelected(oscillators.triangle)}
  >
    <Icon icon="mdi:triangle-wave" />
  </div>
  <div
    class="type"
    class:selected={$soundSettings.oscillator === oscillators.saw}
    on:click={() => toneSelected(oscillators.saw)}
  >
    <Icon icon="tabler:wave-saw-tool" />
  </div>
  <div
    class="type"
    class:selected={$soundSettings.oscillator === oscillators.square}
    on:click={() => toneSelected(oscillators.square)}
  >
    <Icon icon="mdi:square-wave" />
  </div>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-gap: 1rem;
  }
  .type {
    display: flex;
    height: 30px;
    width: 30px;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;
  }
  .type:hover {
    background: #eee;
  }
  .type.selected {
    background: purple;
    border-color: purple;
    color: white;
  }
</style>
