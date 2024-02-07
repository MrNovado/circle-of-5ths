<script lang="ts" context="module">
  import type { BoundingBox } from "./common/types";
  import { getRadius, CIRCLES } from "./common/logic.svelte";

  export const drawChordSetup = (bounds: BoundingBox) => {
    const { gtRadius } = getRadius(bounds);
    return {
      /**
       * Chord is drawn as a single path:
       * - starting from bottom left position
       * - drawing a `left border` line (from bottom to top)
       * - drawing a `top-arc` clockwise (left-to-right)
       * - drawing a `right border` line (from top to bottom)
       * - drawing a `bottom-arc` *counterclockwise* (right-to-left, ie inverted)
       */
      drawChord: (
        ctx: CanvasRenderingContext2D //
      ) => {
        /** how many radians one chord take */
        const chordRadWidth = Math.PI / 6;
        /** current chord position (out of 12) */
        const chordPos = 4;
        /** starting position in radians for border lines */
        const posRadStart = chordRadWidth * (chordPos - 1);
        /** end position in radians for border lines */
        const posRadEnd = chordRadWidth * chordPos;
        /** ark starting angle when going !clockwise */
        const arkClockStart = -chordRadWidth * (chordPos - 1);
        /** ark end angle when going !clockwise */
        const arkClockEnd = -chordRadWidth * (chordPos - 1) + chordRadWidth;

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "red";

        // line start (left)
        ctx.moveTo(Math.cos(posRadStart), -gtRadius(CIRCLES[3]));
        ctx.lineTo(Math.sin(posRadStart), -gtRadius(CIRCLES[2]));

        // ark top
        ctx.arc(0, 0, gtRadius(CIRCLES[2]), arkClockStart, arkClockEnd);

        // line end (right)
        ctx.moveTo(
          Math.cos(posRadEnd) * -gtRadius(CIRCLES[2]), //
          Math.sin(posRadEnd) * -gtRadius(CIRCLES[2])
        );
        ctx.lineTo(
          Math.cos(posRadEnd) * -gtRadius(CIRCLES[3]), //
          Math.sin(posRadEnd) * -gtRadius(CIRCLES[3])
        );

        // ark bottom (but counterclockwise)
        // ! going counterclockwise angles are inverted !
        ctx.arc(0, 0, gtRadius(CIRCLES[3]), arkClockEnd, arkClockStart, true);

        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      },
    };
  };
</script>
