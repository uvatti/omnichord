<script lang="ts">
  import { chords } from "./store";
  import * as Tone from "tone";
  import { Chord } from "@tonaljs/tonal";
  const synth = new Tone.PolySynth(Tone.Synth).toDestination();
  chords.subscribe((chords) => {
    const currentChord = chords[chords.length - 1];
    if (currentChord) {
      const { notes } = Chord.getChord(
        currentChord.type,
        currentChord.note + "3" // Root not begins on third octave
      );
      synth.releaseAll();
      synth.triggerAttack(notes);
    }
  });
</script>
