import { type ChordsSeq, seqToRec } from "../common";

export const MODES_ARR: ChordsSeq = [
  ["vii°", "vi", "I"],
  ["#iv°", "iii", "V"],
  ["#i°", "vii", "II"],
  ["#v°", "#iv", "VI"],
  ["#ii°", "#i", "III"],
  ["vi°", "v#", "VII"],
  ["iv°", "biii", "bV"],
  ["i°", "bvii", "bII"],
  ["v°", "iv", "bVI"],
  ["ii°", "i", "bIII"],
  ["vi°", "v", "bVII"],
  ["iii°", "ii", "IV"],
];

export const MODES_ARR_DESC = [
  "Ionian",
  "Lydian",
  "",
  "",
  "",
  "",
  "",
  "Locrian",
  "Phrygian",
  "Aeolian",
  "Dorian",
  "Mixolydian",
];

export const MODES_REC = seqToRec(MODES_ARR);
