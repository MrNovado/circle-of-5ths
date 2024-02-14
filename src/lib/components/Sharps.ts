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

export const SHARPS_COORDS = [
  [
    { x: "182.52519", y: "28.953192" },
    { x: "179.99013", y: "48.43322" },
    { x: "174.91998", y: "66.845848" },
  ],
  [
    { x: "211.6118", y: "45.631298" },
    { x: "201.07124", y: "59.507484" },
    { x: "188.26247", y: "73.116821" },
  ],
  [
    { x: "232.55951", y: "75.518463" },
    { x: "214.94742", y: "80.588615" },
    { x: "196.13452", y: "85.391907" },
  ],
  [
    { x: "234.16061", y: "111.54317" },
    { x: "214.81401", y: "106.20618" },
    { x: "197.73563", y: "101.53631" },
  ],
  [
    { x: "217.61592", y: "141.96402" },
    { x: "204.00661", y: "128.22128" },
    { x: "190.93097", y: "114.47852" },
  ],
  [
    { x: "189.59669", y: "162.11121" },
    { x: "183.32574", y: "142.23088" },
    { x: "177.98874", y: "124.48538" },
  ],
  [
    { x: "153.0383", y: "163.84572" },
    { x: "158.64215", y: "144.23225" },
    { x: "162.91173", y: "125.81963" },
  ],
  [
    { x: "121.68346", y: "147.03418" },
    { x: "135.55965", y: "132.6243" },
    { x: "149.3024", y: "119.14839" },
  ],
  [
    { x: "102.60371", y: "117.147" },
    { x: "121.68345", y: "111.40975" },
    { x: "140.36293", y: "105.93934" },
  ],
  [
    { x: "100.46891", y: "81.255737" },
    { x: "121.41662", y: "85.792175" },
    { x: "138.09474", y: "92.196564" },
  ],
  [
    { x: "117.68071", y: "49.767467" },
    { x: "133.158", y: "62.309402" },
    { x: "144.36569", y: "79.120934" },
  ],
  [
    { x: "147.43446", y: "30.821138" },
    { x: "155.43994", y: "49.233772" },
    { x: "158.10843", y: "68.446945" },
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
