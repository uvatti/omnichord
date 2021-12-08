<script lang="ts">
  import { chords, soundSettings } from "./store";
  import * as Tone from "tone";
  import { Chord } from "@tonaljs/tonal";
  const reverb = new Tone.Reverb({ wet: 0.5 }).toDestination();
  const synth = new Tone.PolySynth(Tone.Synth, {
    oscillator: {
      type: $soundSettings.oscillator,
    },
    volume: -13,
    envelope: { attack: 0.005, decay: 0, sustain: 1, release: 0.25 },
  }).connect(reverb);

  soundSettings.subscribe((settings) => {
    synth.set({
      oscillator: {
        type: settings.oscillator,
      },
    });
  });

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
