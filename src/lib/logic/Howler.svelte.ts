import { Howl, type HowlCallback, type HowlErrorCallback } from "howler";

import pianoSpriteURL from "/pianosprite.wav?url";

export function howlerMachine(props: {
  onload?: HowlCallback;
  onunlock?: HowlCallback;
  onloaderror?: HowlErrorCallback;
  onplayerror?: HowlErrorCallback;
}) {
  let H$: Howl;

  const howlerArm = () => {
    const sprite: Record<number, [number, number]> = {};
    const stepLength = 923;
    /**
     * ? there's something wrong with howler and sprite timings
     * ? almost as if it's incapable of using smaller time steps
     * ? using audio editor you can confirm the actual length of sprites is `923ms`
     * ? with `918ms` being the length of sound msg inside
     * ? but using those will make howler to overstep selected boundary...
     * * so the quick work-around is to just shorten the `spriteLength` to a closest round number
     */
    const spriteLength = 800; // 918
    for (
      let i = 0, startTime = 0;
      i < 36; //
      i += 1, startTime += stepLength
    ) {
      sprite[i] = [startTime, spriteLength];
    }

    H$ = new Howl({
      src: [pianoSpriteURL],
      sprite,
      volume: 0.75,
      preload: true,
      onload: props.onload,
      onunlock: props.onunlock,
      onloaderror: props.onloaderror,
      onplayerror: props.onplayerror,
    });
  };

  const howlerPlay = (chGI: number) => {
    H$.stop();
    /**
     * ! extremely important for `H$.play`
     * ! to consume string as index`
     */
    H$.play(`${chGI}`);
  };

  return {
    get H$() {
      return H$;
    },
    howlerArm,
    howlerPlay,
  };
}
