import {
  type ChordsSeqExp,
  type ChordDesc,
  seqToRec, //
} from "../common";

export const SHARPS_ARR: ChordsSeqExp = [
  [
    { rId: 0, ch: "B°" },
    { rId: 1, ch: "Am" },
    { rId: 2, ch: "C" },
  ],
  [
    { rId: 3, ch: "F#°" },
    { rId: 4, ch: "Em" },
    { rId: 5, ch: "G" },
  ],
  [
    { rId: 6, ch: "C#°" },
    { rId: 0, ch: "Bm" },
    { rId: 7, ch: "D" },
  ],
  [
    { rId: 8, ch: "G#°" },
    { rId: 3, ch: "F#m" },
    { rId: 1, ch: "A" },
  ],
  [
    { rId: 9, ch: "D#°" },
    { rId: 6, ch: "C#m/Dbm" },
    { rId: 4, ch: "E/Fb" },
  ],
  [
    { rId: 10, ch: "A#°/Bb°" },
    { rId: 8, ch: "G#m/Abm" },
    { rId: 0, ch: "B/Cb" },
  ],
  [
    { rId: 11, ch: "F°/E#°" },
    { rId: 9, ch: "Ebm/D#m" },
    { rId: 3, ch: "F#/Gb" },
  ],
  [
    { rId: 2, ch: "C°/B#°" },
    { rId: 10, ch: "Bbm/A#m" },
    { rId: 6, ch: "Db/C#" },
  ],
  [
    { rId: 5, ch: "G°/Fx°" },
    { rId: 11, ch: "Fm/E#m" },
    { rId: 8, ch: "Ab/G#" },
  ],
  [
    { rId: 7, ch: "D°" },
    { rId: 2, ch: "Cm/B#m" },
    { rId: 9, ch: "Eb/D#" },
  ],
  [
    { rId: 1, ch: "A°" },
    { rId: 5, ch: "Gm" },
    { rId: 10, ch: "Bb" },
  ],
  [
    { rId: 4, ch: "E°" },
    { rId: 7, ch: "Dm" },
    { rId: 11, ch: "F" },
  ],
];

const SHARPS_ARR_SHARP_ONLY: ChordsSeqExp = SHARPS_ARR.map(
  (sec) =>
    sec.map(function sharpsOnly(v): ChordDesc {
      const invariants = v.ch.split("/");
      if (invariants.length > 1) {
        return {
          ...v,
          ch: invariants[0].includes("#") //
            ? invariants[0]
            : invariants[1],
        };
      }

      if (v.ch.includes("Bb")) {
        return {
          ...v, //
          ch: "A#",
        };
      }

      return v;
    }) as unknown as [ChordDesc, ChordDesc, ChordDesc]
);

export const SHARPS_REC = seqToRec(SHARPS_ARR);
