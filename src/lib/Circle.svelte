<script lang="ts">
  import { onMount } from "svelte";

  const NOTES = { n: 12 };

  // TODO: should auto-scale to a perfect box?
  let canvas: HTMLCanvasElement;

  // TODO: convert to props
  const BOUND_SIZE = { w: 1920, h: 1080 };
  const CIRCLE_RADIUS = [0.9, 0.65, 0.4, 0.15];

  const getCircleRadius = (r: number) => Math.floor((Math.min(BOUND_SIZE.w, BOUND_SIZE.h) / 2) * r);
  const getCircleCenter = (): [number, number] => [Math.floor(BOUND_SIZE.w / 2), Math.floor(BOUND_SIZE.h / 2)];

  onMount(() => {
    const ctx = canvas.getContext("2d")!;
    ctx.translate(...getCircleCenter());
    ctx.rotate((Math.PI / 180) * 15);
    ctx.save();

    CIRCLE_RADIUS.forEach((r) => {
      ctx.beginPath();
      ctx.arc(0, 0, getCircleRadius(r), 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    });

    new Array(NOTES.n).fill("𝅗𝅥").forEach((_, n) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      const pos = n * (Math.PI / (NOTES.n / 2));
      const dist = getCircleRadius(CIRCLE_RADIUS[0]);
      const x = Math.cos(pos) * dist;
      const y = Math.sin(pos) * dist;
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    });
  });
</script>

<canvas bind:this={canvas} width={BOUND_SIZE.w} height={BOUND_SIZE.h} />

<style>
  canvas {
    width: 100%;
    height: 100%;
    background-color: #666;
  }
</style>
