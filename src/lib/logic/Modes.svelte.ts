import { createSeqGen } from "../common";
import { MODES_REC } from "../data/Modes";

const modesSeqGen = createSeqGen(MODES_REC);

export function modesMachine() {
  let modeCurrentIndex = $state(0);
  let modesDeg = $derived([...modesSeqGen(modeCurrentIndex)]);

  const modeChange = (modeGI: number) => {
    modeCurrentIndex = modeGI;
  };

  return {
    get modeCurrentIndex() {
      return modeCurrentIndex;
    },
    get modesDeg() {
      return modesDeg;
    },
    modeChange,
  };
}
