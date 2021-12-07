<script lang="ts">
  import { chords } from "./store";
  import * as Tone from "tone";
  import { Chord } from "@tonaljs/tonal";
  const reverb = new Tone.Reverb({ wet: 0.5 }).toDestination();
  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: "amsawtooth15",
    },
    volume: -13,
    envelope: { attack: 0.005, decay: 0, sustain: 1, release: 0.25 },
  }).connect(reverb);
  chords.subscribe((chords) => {
    const currentChord = chords[chords.length - 1];
    synth.releaseAll();
    if (currentChord) {
      const { notes } = Chord.getChord(
        currentChord.type,
        currentChord.note + "3" // Root not begins on third octave
      );
      synth.triggerAttack(notes);
    }
  });
</script>
