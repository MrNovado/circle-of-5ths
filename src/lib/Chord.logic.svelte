<script lang="ts" context="module">
  import type { BoundingBox } from "./common/types";
  import { getRadius, CIRCLES } from "./common/logic.svelte";

  export const drawChordSetup = (bounds: BoundingBox) => {
    const { gtRadius } = getRadius(bounds);
    return {
      drawChord: (
        ctx: CanvasRenderingContext2D //
      ) => {
        const chordRadWidth = Math.PI / 6;
        const chordPos = 4;
        const posStart = chordRadWidth * (chordPos - 1);
        const posEnd = chordRadWidth * chordPos;

        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "red";

        // line start (left)
        ctx.moveTo(Math.cos(posStart), -gtRadius(CIRCLES[3]));
        ctx.lineTo(Math.sin(posStart), -gtRadius(CIRCLES[2]));
        // ark top
        ctx.arc(0, 0, gtRadius(CIRCLES[2]), Math.PI * 1.5, Math.PI * 1.5 + chordRadWidth);

        // line end (right)
        ctx.moveTo(
          Math.cos(posEnd) * -gtRadius(CIRCLES[2]), //
          Math.sin(posEnd) * -gtRadius(CIRCLES[2])
        );
        ctx.lineTo(
          Math.cos(posEnd) * -gtRadius(CIRCLES[3]), //
          Math.sin(posEnd) * -gtRadius(CIRCLES[3])
        );
        // ark bottom
        ctx.arc(
          0,
          0,
          gtRadius(CIRCLES[3]),
          -chordRadWidth * (chordPos - 1) + chordRadWidth,
          -chordRadWidth * (chordPos - 1),
          true
        );

        ctx.stroke();
        ctx.fill();
        ctx.closePath();
      },
    };
  };
</script>
