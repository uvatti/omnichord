<script lang="ts">
  import KeyLabels from "./KeyLabels.svelte";

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

  const major = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
  const minor = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const th = ["z", "x", "c", "v", "b", "n", "m", ",", "."];
  const pressed = [];

  window.addEventListener(
    "keydown",
    (e) => {
      if (!pressed.includes(e.key)) {
        if (major.includes(e.key)) {
          pressed.push(e.key);
          keyIn({ note: keys[major.indexOf(e.key)], type: "major" });
        }
        if (minor.includes(e.key)) {
          pressed.push(e.key);
          keyIn({ note: keys[minor.indexOf(e.key)], type: "minor" });
        }
        if (th.includes(e.key)) {
          pressed.push(e.key);
          keyIn({ note: keys[th.indexOf(e.key)], type: "min7" });
        }
      }
    },
    true
  );

  document.addEventListener(
    "keyup",
    (e) => {
      if (pressed.includes(e.key)) {
        if (major.includes(e.key)) {
          pressed.splice(pressed.indexOf(e.key), 1);
          keyIn({ note: keys[major.indexOf(e.key)], type: "major" });
        }
        if (minor.includes(e.key)) {
          pressed.splice(pressed.indexOf(e.key), 1);
          keyIn({ note: keys[minor.indexOf(e.key)], type: "minor" });
        }
        if (th.includes(e.key)) {
          pressed.splice(pressed.indexOf(e.key), 1);
          keyIn({ note: keys[th.indexOf(e.key)], type: "min7" });
        }
      }
    },
    true
  );
</script>

<div class="board-wrapper">
  <KeyLabels {keys} />
  <div class="note">
    <div class="chord-type">Maj</div>
    {#each keys as k}
      <div
        class="board-button"
        on:click={() => keyIn({ note: k, type: "major" })}
      />
    {/each}
  </div>
  <div class="minor note">
    <div class="chord-type">Min</div>
    {#each keys as k}
      <div
        class="board-button"
        on:click={() => keyIn({ note: k, type: "minor" })}
      />
    {/each}
  </div>
  <div class="th note">
    <div class="chord-type">7th</div>
    {#each keys as k}
      <div
        class="board-button"
        on:click={() => keyIn({ note: k, type: "min7" })}
      />
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
  .chord-type {
    width: 30px;
    display: flex;
    align-items: center;
  }
  .board-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    width: 50px;
    height: 50px;
    border: 1px solid #ddd;
    border-radius: 8px;
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
