<script lang="ts">
  import { onMount } from "svelte";
  import type { BoundingBox, BoundingBoxExt } from "./common/types";
  import { toRel } from "./common/logic.svelte";
  import { drawCircleSetup } from "./Circle.logic.svelte";

  const { bounds } = $props<{ bounds: BoundingBox }>();
  const { drawCircle } = drawCircleSetup(bounds);

  // TODO: should auto-scale to a perfect box?
  let canvasRef: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvasRef.getContext("2d")!;
    const boundRect = canvasRef.getBoundingClientRect();
    const extBounds: BoundingBoxExt = { ...bounds, x: boundRect.x, y: boundRect.y };
    const { ttRel } = toRel(extBounds);

    // #
    drawCircle(ctx);

    const highlightChord = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY, ttRel(e.clientX, e.clientY));
    };

    canvasRef.addEventListener("mousemove", highlightChord);
    return () => {
      canvasRef.removeEventListener("mousemove", highlightChord);
    };
  });
</script>

<canvas bind:this={canvasRef} width={bounds.w} height={bounds.h} />

<style>
  canvas {
    width: 100%;
    height: 100%;
    background-color: #666;
  }
</style>
