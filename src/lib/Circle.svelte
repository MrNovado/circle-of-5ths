<script lang="ts">
  import { onMount } from "svelte";
  import type { BoundingBox } from "./Circle.types";
  import { drawBase } from "./Circle.math.svelte";

  const { bounds } = $props<{ bounds: BoundingBox }>();

  // TODO: should auto-scale to a perfect box?
  let canvas: HTMLCanvasElement;

  onMount(() => {
    const ctx = canvas.getContext("2d")!;
    drawBase(ctx, bounds);

    const highlightChord = (e: MouseEvent) => {
      console.log(e.clientX, e.clientY);
    };

    canvas.addEventListener("mousemove", highlightChord);
    return () => {
      canvas.removeEventListener("mousemove", highlightChord);
    };
  });
</script>

<canvas bind:this={canvas} width={bounds.w} height={bounds.h} />

<style>
  canvas {
    width: 100%;
    height: 100%;
    background-color: #666;
  }
</style>
