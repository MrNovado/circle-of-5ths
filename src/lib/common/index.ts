export type ChordsSeq = [string, string, string][];
export type ChordDesc = { ch: string; rId?: number; gi: number };
export type ChordsSeqExp = [ChordDesc, ChordDesc, ChordDesc][];
export type ChordItem = { v: ChordsSeqExp[number]; n: number; p: number };
export type ChordsRec = Record<number, ChordItem>;

export const CURRENT_SEQ = [0, 1, 11];

export const seqToRec = (seq: ChordsSeq | ChordsSeqExp) => {
  let gi = -1;
  return seq.reduce(
    (acc, v, seqInd, a) => {
      acc[seqInd] = {
        v: v.map((el) => {
          gi += 1;
          return typeof el === "string" //
            ? { ch: el, gi }
            : { ...el, gi };
        }) as ChordsSeqExp[number], //

        n: seqInd === a.length - 1 ? 0 : seqInd + 1,
        p: seqInd === 0 ? a.length - 1 : seqInd - 1,
      };
      return acc;
    }, //
    {} as ChordsRec,
  );
};

export const SEQ_FILLER = new Array(12).fill(0);

export const createSeqGen = (rec: ChordsRec) =>
  function* seqGenerator(startInd: number) {
    let cursor = startInd;
    for (let i = 0; i < SEQ_FILLER.length; i += 1) {
      yield rec[cursor];
      cursor = rec[cursor].n;
    }
  };
