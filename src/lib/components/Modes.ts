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

export const MODES_DESC_COORDS = [
  { x: "164.246", y: "14.676733" },
  { x: "204.67372", y: "25.484146" },
  { x: "235.08374", y: "58.11392" },
  { x: "245.08374", y: "98.11392" },
  { x: "235.08374", y: "138.11392" },
  { x: "208.08374", y: "167.11392" },
  { x: "165.08374", y: "178.11392" },
  { x: "122.08374", y: "166.11392" },
  { x: "91.129173", y: "136.49362" },
  { x: "81.38916", y: "95.932465" },
  { x: "92.863693", y: "55.371311" },
  { x: "119.28182", y: "24.81702" },
];

export const MODES_REC = seqToRec(MODES_ARR);
