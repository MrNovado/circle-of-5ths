<script lang="ts">
  import { get as tonalChordGet } from "@tonaljs/chord";

  import {
    MODES_ARR_DESC, //
    MODES_DESC_COORDS as M_DSC_C,
    MODES_DEG_COORDS as M_DEG_C,
    isFirstDegree,
  } from "./data/Modes";

  import { SHARPS_COORDS as SH_C } from "./data/Sharps";

  import { modesMachine } from "./logic/Modes.svelte";
  import { sharpsMachine } from "./logic/Sharps.svelte";
  import { howlerMachine } from "./logic/Howler.svelte";

  import { CURRENT_SEQ } from "./common";

  const CHORD_SEQ_TYPE = ["dim", "minor", "major"];

  let featureState = $state<
    "initial" | "!arming" | "armed" | "error" | "silent" | "loud"
  >("initial");

  const MD_M$ = modesMachine();
  const SH_M$ = sharpsMachine();
  const HW_M$ = howlerMachine({
    onload: () => {
      if (featureState !== "!arming") {
        /**
         * ! This seems to be happening when you play several sprites in quick succession.
         * ! I.e. when you do several `H$.play(x)` without stopping `H$.stop()` the current play first.
         */
        console.warn("onload miss-fire");
        return;
      }

      featureState = "armed";
    },
    onunlock: () => {
      featureState = "loud";
    },
    onloaderror: (_, error) => {
      featureState = "error";
      console.error(error);
    },
    onplayerror: (_, error) => {
      featureState = "error";
      console.error(error);
    },
  });

  const goSilent = () => {
    featureState = "silent";
  };

  const goHowler = () => {
    featureState = "!arming";
    HW_M$.howlerArm();
  };

  let onWheel = (e: WheelEvent) => {
    SH_M$.sharpsRotate(e.deltaY > 0 ? "down" : "up");
  };

  let onModeClick =
    (modeGI: number, modeDegSeqInd: number) => (e: MouseEvent) => {
      if (e.shiftKey) {
        MD_M$.modeChange(modeGI);
      } else {
        MD_M$.modeChange(modeGI);
        SH_M$.sharpsChange(modeDegSeqInd);
      }
    };

  let onChordClick = (chord: string, rid: number, chGI: number) => () => {
    const tonalInfo = tonalChordGet(chord);
    console.info(tonalInfo.name);

    SH_M$.sharpsSelectChord(chord, rid);
    if (featureState === "loud") {
      HW_M$.howlerPlay(chGI!);
    }
  };

  let onChordHover = (chord: string, rid: number | undefined) => () => {
    SH_M$.sharpsHighlightChord(chord, rid);
  };

  // TODO: chord/modes uuids ?
</script>

{#snippet chordLabel(ch: string)}
  {#if ch.includes("#") && ch.includes("°")}
    {ch.slice(0, ch.indexOf("#"))}<tspan
      >{ch.slice(ch.indexOf("#"), ch.indexOf("°"))}</tspan
    >{ch.slice(ch.indexOf("°"))}
  {:else if ch.includes("#")}
    {ch.slice(0, ch.indexOf("#"))}<tspan>{ch.slice(ch.indexOf("#"))}</tspan>
  {:else if ch.includes("m")}
    {ch.slice(0, ch.indexOf("m"))}<tspan>{ch.slice(ch.indexOf("m"))}</tspan>
  {:else}
    {ch}
  {/if}
{/snippet}

{#if featureState === "initial"}
  <center>
    <p>Modern browsers require an additional step or two to play audio</p>
    <button on:click={goHowler}>Go howler</button>
    <button on:click={goSilent}>Go silent</button>
  </center>
{:else if featureState === "!arming"}
  <center>
    <p>Arming Howler! Could take some time (piano sprite is over 5Mb)</p>
  </center>
{:else if featureState === "armed"}
  <center>
    <p>Howler' armed; unlock audio context</p>
    <button>Unlock audio</button>
  </center>
{:else if featureState === "error"}
  <center>
    <p>Something went wrong, howler' down; try reloading or file an issue</p>
  </center>
{:else}
  <svg
    width="1280"
    height="720"
    viewBox="0 0 338.66667 190.5"
    version="1.1"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    on:wheel={onWheel}
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
      {#each SH_M$.sharps as { v: chordSec, sGI }, chordSeqInd (`${sGI}-${chordSeqInd}`)}
        {#each chordSec as chord, chordInd (`${chord.chGI}-${chordInd}`)}
          <g
            id={CHORD_SEQ_TYPE[chordInd]}
            class:ch-current={SH_M$.selectedChord === chord.ch}
            class:ch-idle={SH_M$.selectedChord !== chord.ch}
            class:ch-hover={SH_M$.hoveredChord === chord.ch}
            class:ch-hover-relevant={SH_M$.hoveredChordRid === chord.rId}
            class:ch-relevant={SH_M$.selectedChordRid === chord.rId}
            class:ch-current={CHORD_SEQ_TYPE[chordInd] === "dim" //
              ? CURRENT_SEQ[0] === chordSeqInd
              : CURRENT_SEQ.includes(chordSeqInd)}
            class:ch-current-key={isFirstDegree(
              MD_M$.modesDeg[chordSeqInd].v[chordInd].ch,
            )}
          >
            <path
              id="frame"
              d={SH_C[chordSeqInd][chordInd].d}
              on:click={onChordClick(chord.ch, chord.rId!, chord.chGI!)}
              on:mouseenter={onChordHover(chord.ch, chord.rId!)}
              on:mouseleave={onChordHover("", undefined)}
            />
            <text
              x={SH_C[chordSeqInd][chordInd].x}
              y={SH_C[chordSeqInd][chordInd].y}
              >{@render chordLabel(chord.ch)}</text
            >
          </g>
        {/each}
      {/each}
    </g>

    <!-- SCALES -->
    <g id="scales">
      {#each MD_M$.modesDeg as { v: modeDeg, sGI: modeGI }, modeDegSeqInd (`${modeGI}-${modeDegSeqInd}`)}
        <text
          id="description"
          x={M_DSC_C[modeDegSeqInd].x}
          y={M_DSC_C[modeDegSeqInd].y}
          on:click={onModeClick(modeGI, modeDegSeqInd)}
          >{MODES_ARR_DESC[modeGI]}</text
        >
        {#each modeDeg as { ch: deg }, degInd (`${deg}-${degInd}`)}
          <text
            id="degree"
            x={M_DEG_C[modeDegSeqInd][degInd].x}
            y={M_DEG_C[modeDegSeqInd][degInd].y}>{deg}</text
          >
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
{/if}

<style>
  center {
    margin-top: 10%;
  }

  p {
    max-width: 600px;
    color: white;
    margin: 18px;
    line-height: 24px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  svg {
    user-select: none;
    background: silver;
    width: 100%;
    height: 100%;
  }

  #scales {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    fill: #ffdd55;
    stroke: #28220b;
    stroke-width: 0.1;
  }

  #scales #description {
    font-size: 3px;
    stroke-width: 0.03;
    cursor: pointer;
    pointer-events: all;
  }

  #scales #degree {
    font-size: 3px;
    stroke-width: 0.05px;
  }

  #scales text {
    pointer-events: none;
  }

  #chords {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
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

  /* ! using :global coz preview does not scope snippets properly yet ! */
  #chords text :global(tspan) {
    /* baseline supposedly interchangeable /w vertical-align, but alas */
    baseline-shift: sub;
    font-size: 0.6em;
  }

  #chords .ch-idle #frame {
    fill: rgba(0, 0, 0, 0);
  }

  #chords .ch-selected.ch-selected #frame {
    fill: lightgray;
  }

  #chords .ch-hover #frame {
    fill: rgb(192, 141, 141);
  }

  #chords .ch-hover-relevant #frame {
    fill: rgba(192, 141, 141, 0.3);
  }

  #chords .ch-relevant #frame {
    fill: rgba(249, 229, 233, 0.3);
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
