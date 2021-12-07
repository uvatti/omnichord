<script lang="ts">
  import { subscribe } from "svelte/internal";

  import { Chord, chords } from "./store";

  let subs;
  const keyIn = (chord: Chord) => {
    if (checkIfPressed(chord)) {
      console.log("released");
      chords.chordReleased(chord);
    } else {
      console.log("pressed");
      chords.chordPressed(chord);
    }
  };
  const checkIfPressed = ({ note, type }: Chord) => {
    return (
      subs.filter((keys) => {
        return keys.note === note && keys.type === type;
      }).length > 0
    );
  };

  chords.subscribe((value) => {
    subs = value;
    console.log(value);
  });

  const keys = ["Eb", "Bb", "F", "C", "G", "D", "A", "E", "B"];
</script>

<div class="board-wrapper">
  <div class="major note">
    {#each keys as k}
      <div
        class="board-button"
        on:click={() => keyIn({ note: k, type: "major" })}
      >
        {k}
      </div>
    {/each}
  </div>
  <div class="minor note">
    {#each keys as k}
      <div
        class="board-button"
        on:click={() => keyIn({ note: k, type: "minor" })}
      >
        {k}
      </div>
    {/each}
  </div>
  <div class="th note">
    {#each keys as k}
      <div
        class="board-button"
        on:click={() => keyIn({ note: k, type: "min7" })}
      >
        {k}
      </div>
    {/each}
  </div>
  <button on:click={() => console.log(chords.subscribe)}> SUBS</button>
</div>

<style>
  .board-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .note {
    display: flex;
    flex-direction: row;
  }
  .note.major {
  }
  .note.minor {
    padding-left: 60px;
  }
  .note.th {
    padding-left: 120px;
  }
  .board-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 50px;
    height: 50px;
    background: gray;
  }
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
