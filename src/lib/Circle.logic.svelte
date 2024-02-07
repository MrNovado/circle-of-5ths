<script lang="ts" context="module">
  import type { BoundingBox } from "./common/types";
  import { getPivot, CIRCLES, getRadius, NOTES } from "./common/logic.svelte";
  import { drawChordSetup } from "./Chord.logic.svelte";

  export const drawCircleSetup = (bounds: BoundingBox) => {
    const { gtRadius } = getRadius(bounds);
    const { drawChord } = drawChordSetup(bounds);
    return {
      drawCircle: (
        ctx: CanvasRenderingContext2D //
      ) => {
        const pivot = getPivot(bounds);
        ctx.translate(...pivot);
        // ctx.rotate((Math.PI / 180) * 15);
        // ctx.save();

        // drawing circles
        CIRCLES.forEach((r) => {
          ctx.beginPath();
          ctx.arc(0, 0, gtRadius(r), 0, Math.PI * 2);
          ctx.closePath();
          ctx.stroke();
        });

        // drawing sector lines
        NOTES.forEach((_, n, { length: slices }) => {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          const pos = n * (Math.PI / (slices / 2));
          const dist = gtRadius(CIRCLES[0]);
          const x = Math.cos(pos) * dist;
          const y = Math.sin(pos) * dist;
          ctx.lineTo(x, y);
          ctx.closePath();
          ctx.stroke();
        });

        // chord
        drawChord(ctx);
      },
    };
  };
</script>
