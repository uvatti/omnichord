import { writable } from "svelte/store";

export type Chord = { note: string; type: string };
export const chordStore = () => {
  const { subscribe, update } = writable<Chord[]>([]);

  return {
    subscribe,
    chordPressed: (chord: Chord) => {
      update((chords) => [...chords, chord]);
    },
    chordReleased: ({ note, type }: Chord) =>
      update((chords) =>
        chords.filter((c) => c.note === note && c.type === type)
      ),
  };
};

export const chords = chordStore();
