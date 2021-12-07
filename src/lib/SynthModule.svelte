<script lang="ts">
    import {chords} from './store';
    import Tone from 'tone'
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    chords.subscribe((chords) => {
        const currentChord = chords[chords.length - 1];
        const chordNotes = ['A4'];
        synth.triggerAttack(chordNotes);
    })
</script>