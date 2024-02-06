<script lang="ts" context="module">
  import type { BoundingBox, Center, Circles, Radius } from "./Circle.types";

  export const NOTES = new Array(12).fill("𝅗𝅥");
  export const CIRCLES: Circles = [0.9, 0.65, 0.4, 0.15];

  const getRadius = (bounds: BoundingBox, r: Radius) => Math.floor((Math.min(bounds.w, bounds.h) / 2) * r);
  const getCenter = (bounds: BoundingBox): Center => [Math.floor(bounds.w / 2), Math.floor(bounds.h / 2)];

  export const drawBase = (
    ctx: CanvasRenderingContext2D, //
    bounds: BoundingBox
  ) => {
    ctx.translate(...getCenter(bounds));
    ctx.rotate((Math.PI / 180) * 15);
    ctx.save();

    // drawing circles
    CIRCLES.forEach((r) => {
      ctx.beginPath();
      ctx.arc(0, 0, getRadius(bounds, r), 0, Math.PI * 2);
      ctx.closePath();
      ctx.stroke();
    });

    // drawing sectors (by drawing lines actually)
    NOTES.forEach((_, n, { length: slices }) => {
      ctx.beginPath();
      ctx.moveTo(0, 0);
      const pos = n * (Math.PI / (slices / 2));
      const dist = getRadius(bounds, CIRCLES[0]);
      const x = Math.cos(pos) * dist;
      const y = Math.sin(pos) * dist;
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.stroke();
    });
  };
</script>
