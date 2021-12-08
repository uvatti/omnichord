<script lang="ts">
  import ChordButton from "./ChordButton.svelte";
  import KeyLabels from "./KeyLabels.svelte";

  import { Chord, chords } from "./store";

  const keyIn = (chord: Chord) => {
    if (checkIfPressed(chord)) {
      chords.chordReleased(chord);
    } else {
      chords.chordPressed(chord);
    }
  };
  const checkIfPressed = ({ note, type }: Chord) => {
    return (
      $chords.filter((keys) => {
        return keys.note === note && keys.type === type;
      }).length > 0
    );
  };

  const keys = ["Eb", "Bb", "F", "C", "G", "D", "A", "E", "B"];

  const major = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
  const minor = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  const th = ["z", "x", "c", "v", "b", "n", "m", ",", "."];
  let pressed = [];
  $: isSelected = (note, type) => {
    return subs.filter((c) => c.note === note && c.type === type).length > 0;
  };
  $: isLatest = (note, type) => {
    let temp = subs.findIndex((c) => c.note === note && c.type === type);
    return temp === pressed.length - 1;
  };

  document.addEventListener(
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
      <ChordButton
        isLatest={isLatest(k, "major")}
        isActive={isSelected(k, "major")}
      />
    {/each}
  </div>
  <div class="minor note">
    <div class="chord-type">Min</div>
    {#each keys as k}
      <ChordButton
        isLatest={isLatest(k, "minor")}
        isActive={isSelected(k, "minor")}
      />
    {/each}
  </div>
  <div class="th note">
    <div class="chord-type">7th</div>
    {#each keys as k}
      <ChordButton
        isLatest={isLatest(k, "min7")}
        isActive={isSelected(k, "min7")}
      />
    {/each}
  </div>
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
</style>
