import { createSeqGen } from "../common";
import { SHARPS_REC_SHARP_ONLY } from "../data/Sharps";

const sharpsSeqGen = createSeqGen(SHARPS_REC_SHARP_ONLY);

export function sharpsMachine() {
  let sharpsCurrentIndex = $state(0);
  let sharps = $derived([...sharpsSeqGen(sharpsCurrentIndex)]);

  let sharpsRotate = (type: "up" | "down") => {
    if (type === "down") {
      sharpsCurrentIndex =
        sharpsCurrentIndex === 0 ? 11 : sharpsCurrentIndex - 1;
    } else {
      sharpsCurrentIndex =
        sharpsCurrentIndex === 11 ? 0 : sharpsCurrentIndex + 1;
    }
  };

  let sharpsChange = (seqInd: number) => {
    sharpsCurrentIndex = sharps[seqInd].sGI;
  };

  let selectedChord = $state("");
  let selectedChordRid = $state<number | undefined>(undefined);

  const sharpsSelectChord = (chord: string, rid: number | undefined) => {
    selectedChord = chord;
    selectedChordRid = rid;
  };

  let hoveredChord = $state("");
  let hoveredChordRid = $state<number | undefined>(undefined);
  let sharpsHighlightChord = (chord: string, rid: number | undefined) => {
    hoveredChord = chord;
    hoveredChordRid = rid;
  };

  return {
    get sharpsCurrentIndex() {
      return sharpsCurrentIndex;
    },
    get sharps() {
      return sharps;
    },
    sharpsRotate,
    sharpsChange,
    get selectedChord() {
      return selectedChord;
    },
    get selectedChordRid() {
      return selectedChordRid;
    },
    sharpsSelectChord,
    get hoveredChord() {
      return hoveredChord;
    },
    get hoveredChordRid() {
      return hoveredChordRid;
    },
    sharpsHighlightChord,
  };
}
