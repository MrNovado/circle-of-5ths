<script lang="ts">
  import { clsx } from "clsx";

  import {
    MODES_ARR_DESC, //
    MODES_DESC_COORDS as M_DSC_C,
    MODES_ARR,
    MODES_DEG_COORDS as M_DEG_C,
    isFirstDegree,
  } from "./components/Modes";

  import {
    SHARPS_ARR_SHARP_ONLY, //
    SHARPS_COORDS as SH_C,
  } from "./components/Sharps";

  import {
    CURRENT_SEQ, //
  } from "./common";

  const CHORD_CLS = {
    selected: "ch-selected",
    idle: "ch-idle",
    relevant: "ch-relevant",
    hover: "ch-hover",
    current: "ch-current",
    currentKey: "ch-current-key",
  };

  const CHORD_SEQ_TYPE = ["dim", "minor", "major"];

  let sharps = $state(SHARPS_ARR_SHARP_ONLY);
  let modesDesc = $state(MODES_ARR_DESC);
  let modesDeg = $state(MODES_ARR);

  let selectedChord = $state("C");
  let onChordClick = (chord: string) => () => {
    selectedChord = chord;
  };

  let hoveredChord = $state("");
  let onChordHover = (chord: string) => () => {
    hoveredChord = chord;
  };

  // TODO: uuid for $keys
</script>

<svg
  width="1280"
  height="720"
  viewBox="0 0 338.66667 190.5"
  version="1.1"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  xmlns="http://www.w3.org/2000/svg"
>
  <!-- BASE -->
  <g id="base">
    <circle
      style="fill:#483737;stroke:#000000;stroke-width:0.282384;stroke-opacity:1"
      cx="170.25014"
      cy="94.998505"
      r="93.130554"
      id="c-5"
    />
    <circle
      style="fill:#4d4d4d;stroke:#000000;stroke-width:0.219165;stroke-opacity:1"
      cx="170.0155"
      cy="95.469307"
      r="72.281174"
      id="c-4"
    />
    <circle
      style="fill:#666666;stroke:#000000;stroke-width:0.157765;stroke-opacity:1"
      cx="170.15266"
      cy="95.417755"
      r="52.0313"
      id="c-3"
    />
    <circle
      style="fill:#999999;stroke:#000000;stroke-width:0.0991926;stroke-opacity:1"
      cx="170.16478"
      cy="95.405266"
      r="32.713982"
      id="c-2"
    />
    <circle
      style="fill:#241c1c;fill-opacity:1;stroke:#000000;stroke-width:0.0377926;stroke-opacity:1"
      cx="170.22058"
      cy="95.438683"
      r="12.464105"
      id="c-1"
    />
    <path
      style="fill:#241c1c;stroke:#241c1c;stroke-width:0.264583;stroke-opacity:0.299517"
      d="M 104.33823,160.77694 C 236.02856,29.086616 236.02856,29.086616 236.02856,29.086616"
      id="line"
    />
    <path
      style="fill:#241c1c;stroke:#241c1c;stroke-width:0.264583;stroke-opacity:0.299517"
      d="M 146.10021,185.06026 C 194.27544,5.2678652 194.53343,5.336994 194.53343,5.336994 v 0"
      id="line"
    />
    <path
      style="fill:#241c1c;stroke:#241c1c;stroke-width:0.264583;stroke-opacity:0.299517"
      d="M 194.93371,184.52657 C 146.80971,4.9253653 146.76733,4.9367193 146.76733,4.9367193"
      id="line"
    />
    <path
      style="fill:#241c1c;stroke:#241c1c;stroke-width:0.264583;stroke-opacity:0.299517"
      d="M 236.42883,160.91037 C 104.53837,29.019904 104.73851,28.819768 104.73851,28.819768"
      id="line"
    />
    <path
      style="fill:#241c1c;stroke:#241c1c;stroke-width:0.264583;stroke-opacity:0.299517"
      d="M 260.04503,119.14839 C 80.34376,70.997579 80.34376,70.997579 80.34376,70.997579"
      id="line"
    />
    <path
      style="fill:#241c1c;stroke:#241c1c;stroke-width:0.264583;stroke-opacity:0.299517"
      d="M 260.04503,70.715171 C 80.377116,118.85704 80.377116,118.85704 80.377116,118.85704"
      id="line"
    />
  </g>

  <!-- CHORDS -->
  <g id="chords">
    {#each sharps as chordSec, chordSecInd (chordSec.map((s) => s.ch).join("-"))}
      {#each chordSec as chord, chordInd (`${chord.ch}-${chordInd}`)}
        <g
          id={CHORD_SEQ_TYPE[chordInd]}
          class={clsx({
            [CHORD_CLS.selected]: selectedChord === chord.ch,
            [CHORD_CLS.idle]: selectedChord !== chord.ch,
            [CHORD_CLS.hover]: hoveredChord === chord.ch,
            [CHORD_CLS.current]:
              CHORD_SEQ_TYPE[chordInd] === "dim" //
                ? CURRENT_SEQ[0] === chordSecInd
                : CURRENT_SEQ.includes(chordSecInd),
            [CHORD_CLS.currentKey]: isFirstDegree(modesDeg[chordSecInd][chordInd]),
          })}
        >
          <path
            id="frame"
            d={SH_C[chordSecInd][chordInd].d}
            on:click={onChordClick(chord.ch)}
            on:mouseenter={onChordHover(chord.ch)}
            on:mouseleave={onChordHover("")}
          />
          <text x={SH_C[chordSecInd][chordInd].x} y={SH_C[chordSecInd][chordInd].y}>{chord.ch}</text>
        </g>
      {/each}
    {/each}
  </g>

  <!-- SCALES -->
  <g id="scales">
    <!-- scales-descriptors -->
    {#each modesDesc as modeDesc, modeDescInd (`${modeDesc}-${modeDescInd}`)}
      <text id="description" x={M_DSC_C[modeDescInd].x} y={M_DSC_C[modeDescInd].y}>{modeDesc}</text>
    {/each}

    <!-- scales-chords-degrees -->
    {#each modesDeg as modeDeg, modeDegSecInd (modeDeg.join("-"))}
      {#each modeDeg as deg, degInd (`${deg}-${degInd}`)}
        <text id="degree" x={M_DEG_C[modeDegSecInd][degInd].x} y={M_DEG_C[modeDegSecInd][degInd].y}>{deg}</text>
      {/each}
    {/each}
  </g>

  <!-- SELECTOR -->
  <g id="selector">
    <path
      style="opacity:1;fill:rgba(195,195,195,0.1);stroke:#000000;stroke-width:1;stroke-dasharray:none;stroke-opacity:1;pointer-events:none;"
      d="M 206.68725,58.423036 C 200.01623,51.906732 192.75052,47.553134 183.73253,45.219031 l 5.23999,-19.421981 c -12.14357,-3.343445 -24.49896,-3.509409 -36.70093,-0.382785 l 5.23681,19.532928 c -9.16835,2.320595 -16.86009,6.658893 -23.65694,13.177775 l 28.01343,28.099919 c 4.75117,-4.328928 12.15407,-4.274596 16.88215,0.141774 z"
      id="selector-path"
    />
  </g>
</svg>

<style>
  svg {
    user-select: none;
    background: silver;
    width: 100%;
    height: 100%;
  }

  #scales {
    font-family: "Comic Sans MS";
    fill: #ffdd55;
    stroke: #28220b;
    stroke-width: 0.165;
  }

  #scales #description {
    font-size: 4px;
  }

  #scales #degree {
    font-size: 3px;
    stroke-width: 0.05px;
  }

  #scales text {
    pointer-events: none;
  }

  #chords {
    font-family: "Comic Sans MS";
  }

  #chords #dim {
    font-size: 7px;
  }

  #chords #minor {
    font-size: 5px;
  }

  #chords #major {
    font-size: 4.2px;
  }

  #chords #frame {
    cursor: pointer;
  }

  #chords text {
    pointer-events: none;
  }

  #chords .ch-idle #frame {
    fill: rgba(0, 0, 0, 0);
  }

  #chords .ch-selected.ch-selected #frame {
    fill: lightgray;
  }

  #chords .ch-hover #frame {
    fill: silver;
  }

  #chords .ch-relevant #frame {
    fill: pink;
  }

  #chords .ch-current text {
    fill: aquamarine;
    stroke: black;
    stroke-width: 0.05px;
  }

  #chords .ch-current.ch-current-key text {
    fill: crimson;
    font-weight: bolder;
  }
</style>
