import { writable } from "svelte/store";
import type { NonCustomOscillatorType } from "tone/build/esm/source/oscillator/OscillatorInterface";

export type OscillatorType = NonCustomOscillatorType;
export type Chord = { note: string; type: string };
const chordStore = () => {
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    chordPressed: (chord: Chord) => update((chords) => [...chords, chord]),
    chordReleased: ({ note, type }: Chord) =>
      update((chords) =>
        chords.filter((c) => !(c.note === note && c.type === type))
      ),
  };
};

export const chords = chordStore();

export const oscillators: Record<string, OscillatorType> = {
  saw: "sawtooth",
  sine: "sine",
  square: "square",
  triangle: "triangle",
};

const defaultSound = {
  oscillator: oscillators.triangle,
};

const soundStore = () => {
  const { subscribe, update } = writable(defaultSound);

  return {
    subscribe,
    setOscillator: (oscillator: OscillatorType) =>
      update((soundSettings) => ({ ...soundSettings, oscillator })),
  };
};

export const soundSettings = soundStore();
