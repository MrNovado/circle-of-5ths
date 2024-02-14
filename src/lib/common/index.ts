export type ChordsSeq = [string, string, string][];
export type ChordDesc = { ch: string; rId?: number };
export type ChordsSeqExp = [ChordDesc, ChordDesc, ChordDesc][];
export type ChordItem = { v: ChordsSeqExp[number]; gi: number; n: number; p: number };
export type ChordsRec = Record<number, ChordItem>;

export const seqToRec = (seq: ChordsSeq | ChordsSeqExp) =>
  seq.reduce(
    (acc, v, index, a) => {
      acc[index] = {
        v: v.map((s) => (typeof s === "string" ? { ch: s } : s)) as ChordsSeqExp[number], //
        gi: index,
        n: index === a.length - 1 ? 0 : index + 1,
        p: index === 0 ? a.length - 1 : index - 1,
      };
      return acc;
    }, //
    {} as ChordsRec
  );

export const SEQ_FILLER = new Array(12).fill(0);

export const createSeqGen = (rec: ChordsRec) =>
  function* seqGenerator(startInd: number) {
    let cursor = startInd;
    for (let i = 0; i < SEQ_FILLER.length; i += 1) {
      yield rec[cursor];
      cursor = rec[cursor].n;
    }
  };
